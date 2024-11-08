import sys

def process_input(url, number):
    try:
        # Convert number to an integer
        number = int(number)
        
        # Perform any additional logic with the url and number
        # Here, we simply return them as processed values
        result = {
            "url": url,
            "number": number
        }

        # Return the processed result as a string (e.g., in JSON-like format)
        return result

    except ValueError:
        # If number is not convertible to an integer, return an error
        return {"error": "Invalid number format. Please provide a valid integer."}

if __name__ == "__main__":
    # Get the command-line arguments passed from Node.js
    url = sys.argv[1]
    number = sys.argv[2]

    # Process the inputs
    result = process_input(url, number)

    # Print the result to stdout (Node.js will capture this)
    print(result)
