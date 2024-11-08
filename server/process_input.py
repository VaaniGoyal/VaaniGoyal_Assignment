import sys
import requests
from bs4 import BeautifulSoup
from collections import Counter
import re
import json  # Import the json module to format the output

def process_input(url, number):
    try:
        # Strip any unexpected spaces and check if the input is a valid integer
        number = number.strip()  # Remove leading/trailing whitespaces
        n = int(number)  # Convert to integer

        # Fetch the webpage content using requests
        response = requests.get(url)

        if response.status_code != 200:
            return json.dumps({"error": f"Failed to retrieve the webpage. Status code: {response.status_code}"})

        # Parse the content of the webpage using BeautifulSoup
        soup = BeautifulSoup(response.content, 'html.parser')

        # Get the text content of the webpage and remove non-alphabetic characters
        text = soup.get_text()
        words = re.findall(r'\b\w+\b', text.lower())  # Convert to lowercase and split into words

        # Get the frequency of each word
        word_counts = Counter(words)

        # Get the n most frequent words
        most_common_words = word_counts.most_common(n)

        # Prepare the result in the form of a list of dictionaries
        result = [
            {"frequency": count, "word": word} for word, count in most_common_words
        ]

        # Return the result as JSON string
        return json.dumps(result)  # Make sure the output is valid JSON

    except ValueError as e:
        return json.dumps({"error": f"Invalid number format. Please provide a valid integer. Details: {str(e)}"})
    except Exception as e:
        return json.dumps({"error": f"An error occurred: {str(e)}"})

if __name__ == "__main__":
    # Get the command-line arguments passed from Node.js
    url = sys.argv[1]
    number = sys.argv[2]

    # Process the inputs and get the result
    result = process_input(url, number)

    # Print the result to stdout (Node.js will capture this)
    print(result)
