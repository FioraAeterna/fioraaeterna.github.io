import os
from bs4 import BeautifulSoup

def add_charset_meta(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.htm') or file.endswith('.html'):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'rb') as f:
                        content = f.read()
                    soup = BeautifulSoup(content, 'html.parser')
                    
                    # Remove existing charset meta
                    for meta in soup.find_all('meta', charset=True):
                        meta.decompose()
                    
                    # Add shift-jis meta
                    meta = soup.new_tag('meta', charset='shift-jis')
                    soup.head.insert(0, meta)
                    
                    with open(filepath, 'wb') as f:
                        f.write(soup.encode('shift-jis'))
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")

import sys

# Add at the end:
if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python convert_encoding.py <directory_path>")
        sys.exit(1)
        add_charset_meta(sys.argv[1])
