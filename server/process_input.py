#process_input.py
import sys
import requests
from bs4 import BeautifulSoup
from collections import Counter
import re
import json

def process_input(url, number):
    try:
        if not url.startswith(('http://', 'https://')):
            url = 'https://' + url  # Default to 'https://'
        # Check if the input number is a valid integer
        number = number.strip()
        n = int(number)  # Convert to integer

        # Fetch the webpage content
        response = requests.get(url)
        if response.status_code != 200:
            return json.dumps({"error": f"Failed to retrieve the webpage. Status code: {response.status_code}"})

        # Parse and process the webpage content
        soup = BeautifulSoup(response.content, 'html.parser')
        text = soup.get_text()
        words = re.findall(r'\b\w+\b', text.lower())  # Convert to lowercase and split into words
        word_counts = Counter(words)
        most_common_words = word_counts.most_common(n)

        # Prepare the result
        result = [{"word": word, "frequency": count} for word, count in most_common_words]
        return json.dumps({"data": result})

    except ValueError as e:
        return json.dumps({"error": f"Invalid number format. Details: {str(e)}"})
    except Exception as e:
        return json.dumps({"error": f"An error occurred: {str(e)}"})

if __name__ == "__main__":
    url = sys.argv[1]
    number = sys.argv[2]
    result = process_input(url, number)
    print(result)
