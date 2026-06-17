import re
import json

seed_file = '/Users/umurey/Downloads/Hey Fedee/hey-fede-app/seed-data.json'
ts_file = '/Users/umurey/Downloads/Hey Fedee/hey-fede-app/src/lib/data.ts'

with open(seed_file, 'r', encoding='utf-8') as f:
    menu_data = json.load(f)

with open(ts_file, 'r', encoding='utf-8') as f:
    ts_content = f.read()

# Build a map from name to image data
image_map = {}
for item in menu_data:
    if 'image' in item:
        # replace unescaped quotes just in case
        name = item['name'].replace('"', '\\"')
        image_map[name] = {
            'image': item['image'],
            'imageAlt': item['imageAlt'].replace('"', '\\"'),
            'imageTitle': item['imageTitle'].replace('"', '\\"')
        }

def replacer(match):
    full_match = match.group(0)
    name = match.group(1)
    # the capture group 1 is the whole string minus closing brace, but let's be safer
    # we match `{ id: "...", name: "NAME", ... }`
    if name in image_map:
        img_data = image_map[name]
        # check if it already has image
        if 'image:' not in full_match:
            # find the last quote before }
            # a safer way: we have `match.group(0)` which is `{ ... }`
            # we want to insert `, image: "...", imageAlt: "...", imageTitle: "..."` before `}`
            inner = re.sub(r'(\s*})$', '', full_match)
            appended = f'{inner}, image: "{img_data["image"]}", imageAlt: "{img_data["imageAlt"]}", imageTitle: "{img_data["imageTitle"]}" }}'
            return appended
    return full_match

# Find items in the format { id: "...", name: "..." ... }
pattern = re.compile(r'{\s*id:\s*"[^"]+",\s*name:\s*"([^"]+)"[^{}]*}')
new_ts_content = pattern.sub(replacer, ts_content)

with open(ts_file, 'w', encoding='utf-8') as f:
    f.write(new_ts_content)

print("Updated data.ts successfully")
