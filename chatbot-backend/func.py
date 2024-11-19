import re

def replace(response_text):
   
    modified_response = re.sub(r'\bGemma\b', 'Anti AI', response_text, flags=re.IGNORECASE)
    modified_response = re.sub(r'\bI am Gemma\b', 'I am Anti AI', modified_response, flags=re.IGNORECASE)
    modified_response = re.sub(r'\bGemma, an AI assistant\b', 'Anti AI, an AI assistant', modified_response, flags=re.IGNORECASE)
    modified_response = re.sub(r'\bGoogle\b', 'Anti.ai', modified_response, flags=re.IGNORECASE)
    modified_response = re.sub(r'\bDeepMind\b', ' ', modified_response, flags=re.IGNORECASE)
    return modified_response