import json
import os
import shutil
import re

seed_file = '/Users/umurey/Downloads/Hey Fedee/hey-fede-app/seed-data.json'
artifact_dir = '/Users/umurey/.gemini/antigravity/brain/d8838cc3-4aa6-488d-aae7-c0441e5af71e'
assets_dir = '/Users/umurey/Downloads/Hey Fedee/hey-fede-app/public/assets/menu'

os.makedirs(assets_dir, exist_ok=True)

with open(seed_file, 'r', encoding='utf-8') as f:
    menu_data = json.load(f)

# Collect images
images = [f for f in os.listdir(artifact_dir) if f.endswith('.png') and not f.startswith('screenshot')]

# Create a mapping from clean name to original file
clean_to_file = {}
for img in images:
    # remove timestamp and extension e.g., crepe_puderzucker_1781638272853.png -> crepe_puderzucker
    clean_name = re.sub(r'_\d+\.png$', '', img)
    # also replace underscores with dashes
    clean_name_dashed = clean_name.replace('_', '-')
    clean_to_file[clean_name_dashed] = img

def find_best_image(item):
    item_id = item['id']
    item_name = item['name'].lower()
    
    # direct exact match on parts of ID
    for clean_name, filename in clean_to_file.items():
        if clean_name in item_id:
            return clean_name, filename
            
    # Try custom mapping for edge cases
    custom_map = {
        'crepes-puderzucker-oder-zimt-zucker': ['crepe-puderzucker', 'crepe-zimt-zucker'],
        'so-e-nach-wahl': ['bubble-waffle-sosse'],
        'eigene-kreation': ['bubble-waffle-eigene-kreation', 'crepe-eigene-kreation'],
        'eis-getraenke-eisschokolade': ['eisschokolade'],
        'fede-friends': ['fede-box-fede-and-friends'],
        'cr-pes-kinder-riegel': ['crepe-kinder-riegel'],
        'cr-pes-yogurette': ['crepe-yogurette'],
        'cr-pes-pistazie': ['crepe-pistazie'],
        'cr-pes-lotus': ['crepe-lotus'],
        'cr-pes-bueno': ['crepe-bueno'],
        'herzhaft-schinken-k-se': ['crepe-herzhaft-schinken-kaese'],
        'herzhaft-salami-k-se': ['crepe-herzhaft-salami-kaese'],
        'herzhaft-caprese': ['crepe-herzhaft-caprese'],
        'milchshake': ['milchshake'],
        # New additions
        'special-shake-snickers': ['special-shake-snickers'],
        'special-shake-bueno': ['special-shake-bueno'],
        'special-shake-lotus': ['special-shake-lotus'],
        'special-shake-cheesecake': ['special-shake-cheesecake'],
        'fede-boxen-pancake-picknick': ['fede-box-pancake-picknick'],
        'fede-boxen-mix-box': ['fede-box-mix-box'],
        'crepes-nutella': ['crepe-nutella']
    }
    
    for key, values in custom_map.items():
        if key in item_id:
            for v in values:
                if v in clean_to_file:
                    return v, clean_to_file[v]
                    
    # Fuzzy match using name
    # removing html tags like <sup>
    clean_item_name = re.sub(r'<[^>]+>', '', item_name)
    clean_item_name = clean_item_name.replace(' ', '-').replace('(', '').replace(')', '').replace(',', '').replace('&', 'and').replace('/', '-')
    for clean_name, filename in clean_to_file.items():
        if clean_name in clean_item_name or clean_item_name in clean_name:
            return clean_name, filename
            
    return None, None

matched_count = 0
for item in menu_data:
    if 'Extra' in item['name']:
        continue
        
    clean_name, filename = find_best_image(item)
    if clean_name:
        # copy file
        src = os.path.join(artifact_dir, filename)
        dest_filename = f"{clean_name}.png"
        dest = os.path.join(assets_dir, dest_filename)
        shutil.copy2(src, dest)
        
        # update json
        item['image'] = f"/assets/menu/{dest_filename}"
        clean_title = re.sub(r'<[^>]+>', '', item['name'])
        item['imageAlt'] = f"{clean_title} - Hey Fede Dessert Café"
        item['imageTitle'] = clean_title
        matched_count += 1
    else:
        print(f"Could not find image for {item['id']} / {item['name']}")

with open(seed_file, 'w', encoding='utf-8') as f:
    json.dump(menu_data, f, indent=2, ensure_ascii=False)

print(f"Successfully matched and copied {matched_count} images.")
