import os
import codecs
import sys

def convert_to_utf8(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.htm') or file.endswith('.html'):
                filepath = os.path.join(root, file)
                try:
                    # Read as shift-jis
                    with codecs.open(filepath, 'r', 'shift-jis') as f:
                        content = f.read()
                    
                    # Write as UTF-8 with BOM
                    with codecs.open(filepath, 'w', 'utf-8-sig') as f:
                        f.write(content)
                except Exception as e:
                    print(f"Error converting {filepath}: {e}")

# Add at the end:
if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python convert_encoding.py <directory_path>")
        sys.exit(1)
    convert_to_utf8(sys.argv[1])
