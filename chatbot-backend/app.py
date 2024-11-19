# import os
# import re
# from dotenv import load_dotenv      # type: ignore 
# from flask import Flask, send_from_directory, request, jsonify   # type: ignore 
# from flask_cors import CORS # type: ignore 
# from langchain_core.prompts import ChatPromptTemplate   # type: ignore 
# from langchain_core.output_parsers import StrOutputParser  # type: ignore 
# from langchain_community.llms import ollama        # type: ignore 

# from func import replace

# import time
# import random
# import string
# import streamlit as st # type: ignore 

# import nltk # type: ignore 
# from nltk.corpus import stopwords         # type: ignore 
# from nltk.tokenize import RegexpTokenizer  # type: ignore 
# from fuzzywuzzy import process         # type: ignore 
# nltk.download('stopwords', quiet=True)  # type: ignore 

# load_dotenv(dotenv_path=".env")  

# app = Flask(__name__, static_folder='../build', static_url_path='/')
# CORS(app)

# antiai_api_key = os.getenv("ANTIAI_API_KEY")

# os.environ["ANTIAI_API_KEY"] = antiai_api_key


# tokenizer = RegexpTokenizer(r'\w+|\$[\d\.]+|\S+')

# prompt = ChatPromptTemplate.from_messages(
#     [
#         ("system", "You are a helpful assistant. Please respond to the user queries"),
#         ("user", "Question: {question}")
#     ]
# )

# def score_match(key, token):
#     key_tokens = tokenizer.tokenize(key)
#     score = sum(1 for t in token if t.lower() in (k.lower() for k in key_tokens))
#     return score

# def job_search():
#     return "Please visit our career page"

# def remove_punctuation(text):
#     translator = str.maketrans("", "", string.punctuation)
#     cleaned_text = text.translate(translator)
#     return cleaned_text

# intents = {
#     "joke": ["joke", "funny", "laugh", "humor"],
#     "effects_of_ai": ["harm", "effect", "danger", "risk", "negative", "problem"],
#     "ai_positive": ["positive", "benefit", "advantage","merit", "good"],
#     "ai_negative": ["negative", "disadvantage","demerit", "bad"],  
# }

# def classify_intent(question):
#     for intent, keywords in intents.items():
#         if any(keyword in question.lower() for keyword in keywords):
#             return intent
#     return None

# def get_valid_index(max_index):
#     while True:
#         try:
#             inp = int(input("Kindly enter the index number: "))
#             if 1 <= inp <= max_index:
#                 return inp
#             else:
#                 return  f"Please enter a number between 1 and {max_index}."
#         except ValueError:
#             return  "Invalid input. Please enter a valid integer."

# def input_Index():
#     inp = int(input("Kindly enter the index number: "))
#     return inp

# def all_matches(filtered, matches):
#     matching_services = []
#     for match in matches:
#         if any(f" {word.lower()} " in f" {match.lower()} " for word in filtered):
#             matching_services.append(match)
#     return matching_services

# def custom_responses(question):

#     negative_response = ["bye", "later", "quit", "exit", "end"]

#     general_question = {
#     "Hii": "Hello 😊",
#     "Hello": "Hii 👋",
#     "motto": "अन्ते सत्यं विजयते। 🏆",

#     "vision mission": "Our mission is clear: to protect and empower by strategically managing the infiltration of artificial intelligence. We believe that AI should be harnessed responsibly for the betterment of humanity and society. ANTI AI is committed to providing innovative solutions that ensure the ethical use of AI, preventing unintended intrusions and promoting a secure digital landscape. 🌍🤖",
#     "contact connect reach appointment call email": "You can contact Anti AI via phone or email.\n\nPhone: +91 9116665513\nEmail: support@antiai.ltd 📞📧",
    
#     "when was established founded year started established in Created Launched set up Formed": "Anti AI was established by Tanishq Sharma in 2024 🛠️",
#     "founder owner founded Established by": "Tanishq Sharma 🧑‍💼",
#     "size or total members people employee employees working in": "2-10 👥",
#     "when contact free take call working hour hours": "Monday-Saturday 10 am -7 pm 🕒",
#     "Speciality Specialities": "Uniqueness\nGrowth\nGoal Oriented\nSoftware 🌟📈",
#     "headquarter": "Address: 70, Kesar Vihar, near Railway Colony, Vidhyadhar Nagar, Railway Colony, Jagatpura, Jaipur, Rajasthan 302017🏢",
#     "located situated location address headquarters": "Address: 70, Kesar Vihar, near Railway Colony, Vidhyadhar Nagar, Railway Colony, Jagatpura, Jaipur, Rajasthan 302017 🏢",
# }

#     negative_response = ["bye 👋", "later 🕐", "quit 🚪", "exit 🔚", "end 🛑"]

#     response = {
#         "AI Services ": "AI Services: Our AI services include chatbots, voice assistants, and AI sales bots 🤖💬\n",
#         "Web Services ": "Web Services: Our Web Development services provide end-to-end solutions for building robust, scalable, and user-friendly websites and applications, customized to your business needs 🌐💻\n",
#         "DevOps Services ": "DevOps Services: Streamlining Software Development and Deployment. Our DevOps services help organizations streamline their software development and deployment processes 🚀🛠️\n",
#         "Cloud Services ": "Cloud Services: Our cloud services help you build and manage your cloud infrastructure ☁️💡\n",
#         "App Develop Services": "App Development: Transforming ideas into powerful mobile solutions. Custom app development tailored to your business needs. Expert team delivering seamless iOS and Android experiences 📱💡\n",
#         "antiai": "AntiAI is an AI research and development company. Our mission is to ensure that the threat from artificial general intelligence is mitigated even before they arise 🤖🛡️.\n\nWe believe that humanity should benefit from AI, and we're developing our own first-in-class Anti AI software to ensure safe usage. We are building safe and smart solutions against AGI, but will also consider our mission fulfilled if our work aids others to achieve this outcome 💡🌍.\n",
#         "Our Projects or products": "Our Projects:\nANTI.Q - Music Player 🎵\nANTI.0 - offers robust protection against AI-driven intrusions 🛡️\nANTI.1 - redefines AI capabilities by offering innovative features and functionalities 🤖🔧\n",
#         "Full Form": "A - ARTIFICIAL\nN - NUANCES\nT - TACTICAL\nI - INFILTRATION\nAI - ARTIFICIAL INTELLIGENCE 🧠💡\n",
#         "About ceo owner founder Tanishq": "Tanishq Sharma is a tech entrepreneur and the founder of ANTI AI, a company dedicated to safeguarding the world from the potential dangers of AGI 🧑‍💼🚀.\n",
#         "anti.1": "ANTI.1 represents our groundbreaking Concept Artificial Intelligence Project, aimed at disrupting the AI industry with a novel approach. Currently in the developmental phase, ANTI.1 is being meticulously crafted by our dedicated team of researchers and developers. It seeks to redefine AI capabilities by offering innovative features and functionalities not seen before. 🚀🤖\n\nInnovative ✨\t\t\tEthical AI ⚖️",
#         "anti.0": "ANTI.0 is our pioneering Anti AI Software, specifically crafted to combat the influence of Artificial Intelligence. This innovative solution is under active development by our expert team of developers. 🛡️💻\n\nSecurity 🔒\t\t\tFuture Proof 🔮",   
#         "anti.q walkman": "ANTI.Q is our flagship, one-of-a-kind music player, designed to revive the charm of retro entertainment. It delivers a serverless, uninterrupted audio experience, reminiscent of a bygone era. 🎶📻\n\nServerless ☁️\t\t\tRetro 📼\nNostalgia 🎧\t\t\t"
#     }

#     founder_responses = [
#         "Tanishq Sharma 🧑‍💼",
#         "Tanishq Sharma is a tech entrepreneur and the founder of ANTI AI, a company dedicated to safeguarding the world from the potential dangers of AGI 🧑‍💼🚀."
#     ]
    
    
#     weights = { "mission":4,"service":4,"services":4,"ai": 2, "web": 2, "devops": 2,'founded':2,'founder':2,'owner':2,'anti':3,'located':4,'situated':2,"headquarter":5}    
#     jobs=["You can look into our career page for more info regarding jobs"]

#     question = question.replace("anti ai", "antiai").replace("anti.ai", "antiai").replace("anti-ai", "antiai").replace("anti_ai", "antiai")
#     question = question.replace("anti 1", "anti.1").replace("anti1", "anti.1").replace("anti-1", "anti.1").replace("anti_1", "anti.1")
#     question = question.replace("anti 0", "anti.0").replace("anti0", "anti.0").replace("anti-0", "anti.0").replace("anti_0", "anti.0")
#     question = question.replace("anti q", "anti.q").replace("antiq", "anti.q").replace("anti-q", "anti.q").replace("anti_q", "anti.q")

#     if "anti.1" in question:
#         return response["anti.1"]
#     if "anti.0" in question:
#         return response["anti.0"]
#     if "anti.q" in question:
#         return response["anti.q walkman"]
    
#     if "owner" in question or "founder" in question or "establish" in question or "established by" in question or "ceo" in question:
#         if "anti ai" in question or "antiai" in question or "your" in question :
#             return random.choice(founder_responses)
#         else:
#             return None
    
#     if "full form" in question:
#         if "antiai" in question or "your" in question:
#             return response["Full Form"]
#         else:
#             return None
    
#     if "project" in question or "product" in question:
#         if "antiai" in question or "your" in question:
#             return response["Our Projects or products"]
#         else:
#             return None

#     if "pm" in question:
#         return "Please write the full form of PM"

   

#     stop_words = set(stopwords.words('english'))
#     custom_stop_words = stop_words - {"AI", "ai"} 
#     input_quest = question.lower()

#     intent = classify_intent(input_quest)      # Use for queries like tell me a joke on anti ai
#     if intent:
#         return None
    
#     if len(input_quest) < 3:
#         return "Please enter at least 3 words OR Try with Full Form if any."
    
#     if any(word in input_quest for word in ["contact", "connect", "reach", "call", "email"]):
#         return general_question["contact connect reach appointment call email"]

#     quest = remove_punctuation(input_quest)


#     token = tokenizer.tokenize(quest)
#     filtered_tokens = [t for t in token if t.lower() not in custom_stop_words and len(t) >= 2]

#     for t in token:
#         if t in weights:
#             pass
#         else:
#             weights[t] = 0

#     filtered_with_weight = [token if token in weights else token for token in filtered_tokens]
#     filtered_tokens = sorted(filtered_with_weight, key=lambda token: weights[token], reverse=True)

#     best_match = None
#     best_score = 0
#     for key in general_question:
#         score = score_match(key, filtered_tokens)
#         if score > best_score:
#             best_match = key
#             best_score = score
#             match_type = "general"

#     if best_match:
#         if match_type == "general":
#             return general_question[best_match]
#     else:
#         response_keys = response.keys()
#         for tokens in filtered_tokens:
#             matches = [response_keys_matched for response_keys_matched in response_keys if tokens.lower() in response_keys_matched.lower()]

#             if len(matches) == 1:
#                 return f"{response[matches[0]]}"
#             elif tokens in ["job", "opening", "career", "careers", "jobs", 'vacancy', "openings"]:
#                 return job_search()
#             elif len(matches) >= 2:
#                 filtered_tokens.remove(tokens)
#                 best = all_matches(filtered_tokens, matches)
#                 if best:
#                     return "\n".join([f"{response[match]}" for match in best])
#                 else:
#                     return "\n".join([f"{response[match]}" for match in matches])
#             elif tokens in negative_response:
#                 return "Hope to see you next time"
#         return None

# d=["relation","developed","relationship","made","build","develop","owns","generate","link"]

# @app.route('/api/chat', methods=['POST'])
# @app.route('/api/chat', methods=['POST'])
# def chat():
#     data = request.get_json()
#     user_input = data.get('message')

#     custom_response = custom_responses(user_input)
#     if custom_response:
#         time.sleep(3)
#         return jsonify({"response": custom_response})

#     ollama_model = os.getenv("OLLAMA_MODEL")
#     llm = ollama.Ollama(model=ollama_model)

#     output_parser = StrOutputParser()
#     chain = prompt | llm | output_parser

#     prompt_text = prompt.format(question=user_input)
#     response = chain.invoke({"question": user_input})

#     if "google" not in user_input.lower():
#         modified_response = replace(response)
#         return jsonify({"response": modified_response})
#     elif "google" in user_input.lower():
#         if not any(word in user_input.lower() for word in d):  
#             return jsonify({"response": response})
#         else:
#             modified_response = replace(response)
#             return jsonify({"response": modified_response})

#     else:
#         return jsonify({"response": response})


# if __name__ == "__main__":
#     app.run(host='0.0.0.0', port=3000, debug=True)








#new 



import os
import time
#import openai
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
from nltk.tokenize import RegexpTokenizer

# Load environment variables from .env
load_dotenv()

app = Flask(__name__)
CORS(app, origins = ["https://www.antiai.ltd"])

# # Ensure necessary environment variables are set
# antiai_api_key = os.getenv("ANTIAI_API_KEY")
# ollama_model = os.getenv("OLLAMA_MODEL")
# #openai.api_key = os.getenv("OPENAI_API_KEY")

# if not antiai_api_key:
#     raise ValueError("ANTIAI_API_KEY environment variable is missing.")
# if not ollama_model:
#     raise ValueError("OLLAMA_MODEL environment variable is missing.")
#if not openai.api_key:
 #   raise ValueError("OPENAI_API_KEY environment variable is missing.")

# Tokenizer setup
tokenizer = RegexpTokenizer(r'\w+|\$[\d\.]+|\S+')

def score_match(key, tokens):
    key_tokens = tokenizer.tokenize(key)
    return sum(1 for t in tokens if t.lower() in (k.lower() for k in key_tokens))

def custom_responses(question):
    general_question = {
       
        "AI Services ": "Our AI services include chatbots, voice assistants, and AI sales bots 🤖💬",
        "Web Services ": "We offer full-stack web development services 🌐💻",
        "DevOps Services ": "Our DevOps services help streamline software development and deployment 🚀🛠️",
        "Cloud Services ": "Our cloud services provide scalable, secure solutions for businesses ☁️💡",
        "App Develop Services": "We specialize in mobile app development for iOS and Android 📱💡",
        "antiai": "AntiAI is an AI research and development company focused on security and innovation 🌍",
        "projects products": "Our main projects are:\nANTI.Q Music Player 🎵\nANTI.0 Security 🛡️\nANTI.1 AI Innovations 🤖🔧",
        "Full Form": "ANTI AI stands for ARTIFICIAL, NUANCES, TACTICAL, INFILTRATION, ARTIFICIAL INTELLIGENCE 🧠💡",
        "About ceo owner founder Tanishq": "Tanishq Sharma is a tech entrepreneur and founder of ANTI AI 🧑‍💼🚀.",
        "anti.1": "ANTI.1 represents our innovative AI project focused on ethical and futuristic AI 🚀🤖",
        "anti.0": "ANTI.0 is a software that combats unauthorized AI activity and enhances security 🛡️💻",
        "anti.q": "ANTI.Q is our retro-inspired, AI-powered music player 🎶📻",
        "data protection": "Data protection is a top priority at Anti AI. Our software is designed to keep your data secure.",
        "cloud security": "Our cloud solutions are secure, scalable, and designed to meet your business needs ☁️",
        "anti ai": "Anti AI is dedicated to providing innovative solutions to control and manage AI safely.",
        "privacy": "We take user privacy seriously and ensure that all products adhere to privacy standards.",
        "AI ethics": "Our AI solutions prioritize ethics and safety, focusing on responsible AI usage.",
        "machine learning": "We apply machine learning for intelligent features in security and other domains.",
        "deep learning": "Our AI solutions include deep learning techniques for advanced capabilities.",
        "big data": "We utilize big data analytics to enhance AI security and accuracy.",
        "cybersecurity": "Our cybersecurity solutions help protect businesses and individuals from digital threats 🔐",
        "security": "Our main focus is on AI-driven security and data protection 🛡️",
        "automation": "We provide automated solutions to simplify complex processes in AI and software development.",
        "natural language processing": "We use NLP for understanding and generating human-like responses in AI.",
        "predictive analytics": "Our AI products include predictive analytics for insightful data-driven decisions.",
        "consulting": "We offer AI consulting services to help integrate AI safely into your operations.",
        "collaboration": "We collaborate with various industries to develop AI solutions tailored to their needs.",
        "partnership": "Anti AI is open to partnerships to drive AI innovation and security.",
        "AI limitations": "While powerful, AI also has limitations. Our solutions aim to maximize benefits and minimize risks.",
        "chatbot uses": "Chatbots are used for customer service, sales, and enhancing user experiences 🤖",
        "voice assistant": "Our voice assistant solutions help automate user interactions and improve accessibility 🎙️",
        "recommendation system": "We build AI-based recommendation systems for personalized content suggestions.",
        "future AI": "The future of AI involves safer, more ethical AI. Anti AI is committed to responsible advancements.",
        "machine learning vs deep learning": "Machine learning is broad; deep learning is a subset focused on neural networks.",
        "data privacy": "Data privacy is critical, and we ensure all data is handled responsibly and securely.",
        "job roles": "Our roles include AI research, software development, and data science 🧑‍💻",
        "hiring process": "Our hiring process includes an interview, technical assessment, and final selection.",
        "career growth": "We offer great growth opportunities with continuous learning and development.",
        "internship opportunities": "Yes, we offer internships for students interested in AI and software development.",
        "company culture": "We have a supportive culture focusing on innovation, collaboration, and learning.",
        "remote work": "We offer remote work options for flexibility and convenience.",
        "AI in healthcare": "AI is transforming healthcare with diagnostics, personalized medicine, and data analysis.",
        "AI in education": "AI helps in personalized learning, assessments, and managing educational data.",
        "AI in finance": "AI is used in finance for fraud detection, risk assessment, and algorithmic trading.",
        "AI in e-commerce": "AI in e-commerce enhances personalization, recommendations, and customer service.",
        "AI in retail": "AI-driven retail solutions include inventory management, customer insights, and more.",
        "AI in logistics": "AI helps logistics by optimizing routes, demand forecasting, and inventory management.",
        "AI in manufacturing": "AI in manufacturing automates quality checks, predictive maintenance, and efficiency.",
        "challenges AI": "AI challenges include data privacy, bias, security, and ethical considerations.",
        "benefits AI": "AI benefits include automation, improved decision-making, personalization, and innovation.",
        "drawbacks AI": "AI drawbacks include privacy risks, potential bias, and misuse concerns.",
        "AI evolution": "AI has evolved from basic algorithms to complex, deep learning networks.",
        "latest AI trends": "AI trends include ethical AI, automation, NLP, and computer vision applications.",
        "AI jobs": "AI roles include data scientist, machine learning engineer, and AI researcher.",
        "learning AI": "To learn AI, start with Python, linear algebra, and machine learning basics.",
        "books on AI": "Popular books on AI include 'Artificial Intelligence: A Modern Approach' and 'Superintelligence'.",
        "courses on AI": "Recommended courses: Coursera, edX, and fast.ai offer quality AI courses.",
        "AI certification": "AI certifications are available from IBM, Google, and Microsoft.",

    # Greetings & Basic Interaction
    "hello": "hi! how can i assist you today? 😊",
    "hi": "hello! how can i assist you today? 😊",
    "hello there": "hi there! how can i assist you? 😊",
    "hi there!": "hello! how can i assist you? 😊",
    "how are you?": "i'm here to help! how can i assist you? 😊",
    "how are you doing?": "i'm here to help! how can i assist you? 😊",
    "how are you feeling today?": "i'm here to help! how can i assist you? 😊",
    
    # Company Motto, Mission, and Vision
    "what is the motto?": "अन्ते सत्यं विजयते। 🏆",
    "motto": "अन्ते सत्यं विजयते। 🏆",
    "tell me the motto": "अन्ते सत्यं विजयते। 🏆",
    "what is your company's motto?": "अन्ते सत्यं विजयते। 🏆",
    "motto of anti ai": "अन्ते सत्यं विजयते। 🏆",
    "what’s your mission and vision?": "our mission is to protect and empower by managing ai infiltration strategically. 🌍🤖",
    "mission and vision": "our mission is to protect and empower by managing ai infiltration strategically. 🌍🤖",
    "can you tell me the vision and mission of anti ai?": "our mission is to protect and empower by managing ai infiltration strategically. 🌍🤖",
    "what is your mission?": "our mission is to protect and empower by managing ai infiltration strategically. 🌍🤖",
    "mission": "our mission is to protect and empower by managing ai infiltration strategically. 🌍🤖",
    "what is your goal?": "our goal is to secure and empower humanity with ai-safe solutions.",
    "goal": "our goal is to secure and empower humanity with ai-safe solutions.",
    "what's your company's goal?": "our goal is to secure and empower humanity with ai-safe solutions.",

    # Contact Information
    "how do i contact you?": "you can contact anti ai via phone or email.\n\nphone: +91 9116665513\nemail: support@antiai.ltd 📞📧",
    "contact": "you can contact anti ai via phone or email.\n\nphone: +91 9116665513\nemail: support@antiai.ltd 📞📧",
    "what’s your phone number?": "+91 9116665513 is our contact number. feel free to call us! 📞",
    "phone": "+91 9116665513 is our contact number. feel free to call us! 📞",
    "can i have your contact details?": "you can contact anti ai via phone or email.\n\nphone: +91 9116665513\nemail: support@antiai.ltd 📞📧",
    "how can i reach anti ai?": "you can contact anti ai via phone or email.\n\nphone: +91 9116665513\nemail: support@antiai.ltd 📞📧",
    "can i get your phone number?": "+91 9116665513 is our contact number. feel free to call us! 📞",
    "email": "you can reach us at support@antiai.ltd 📧",
    "do you have an email?": "you can reach us at support@antiai.ltd 📧",
    "what is your email ?": "you can reach us at support@antiai.ltd 📧",
    "how can i set an appointment?": "you can contact anti ai via phone or email.\n\nphone: +91 9116665513\nemail: support@antiai.ltd 📞📧",
    "how can i reach you?": "you can contact anti ai via phone or email.\n\nphone: +91 9116665513\nemail: support@antiai.ltd 📞📧",

    # Location
    "where is your headquarter?": "our headquarter is in jaipur, rajasthan, india 🏢",
    "location": "we are located at 70, kesar vihar, near railway colony, vidhyadhar nagar, jagatpura, jaipur, rajasthan 302017  🏢",
    "Address":"we are located at 70, kesar vihar, near railway colony, vidhyadhar nagar, jagatpura, jaipur, rajasthan 302017  🏢",
    "where are you located?": "our headquarter is in jaipur, rajasthan, india 🏢",
    "what’s your address?": "we are located at 70, kesar vihar, near railway colony, vidhyadhar nagar, jagatpura, jaipur, rajasthan 302017 🏢",
    "address": "we are located at 70, kesar vihar, near railway colony, vidhyadhar nagar, jagatpura, jaipur, rajasthan 302017 🏢",
    "where is anti ai located?": "our headquarter is in jaipur, rajasthan, india 🏢",
    "can you give me your address?": "we are located at 70, kesar vihar, near railway colony, vidhyadhar nagar, jagatpura, jaipur, rajasthan 302017 🏢",

    # Company Details
    "when was anti ai established?": "anti ai was established by tanishq sharma in 2024 🛠️",
    "founded": "anti ai was established by tanishq sharma in 2024 🛠️",
    "when was the company founded?": "anti ai was established by tanishq sharma in 2024 🛠️",
    "who is the founder of anti ai?": "anti ai was founded by tanishq sharma 🧑‍💼",
    "founder": "anti ai was founded by tanishq sharma 🧑‍💼",
    "who started anti ai?": "anti ai was founded by tanishq sharma 🧑‍💼",
    "who is the ceo?": "our ceo and founder is tanishq sharma 🧑‍💼",
    "ceo": "our ceo and founder is tanishq sharma 🧑‍💼",
    "is tanishq sharma the ceo?": "our ceo and founder is tanishq sharma 🧑‍💼",
    "how big is the team?": "we are a dedicated team of 2-10 members 👥",
    "team size": "we are a dedicated team of 2-10 members 👥",
    "how many employees do you have?": "we are a dedicated team of 2-10 members 👥",
    "how many people work there?": "we are a dedicated team of 2-10 members 👥",
    "what are your working hours?": "we are available monday to saturday, 10 am to 7 pm 🕒",
    "hours": "we are available monday to saturday, 10 am to 7 pm 🕒",
    "when are you open?": "we are available monday to saturday, 10 am to 7 pm 🕒",
    "what are your business hours?": "we are available monday to saturday, 10 am to 7 pm 🕒",

    # Specialties and Industry
    "what are your specialties?": "uniqueness\n growth\n goal oriented\n software 🌟📈",
    "specialties": "uniqueness\n growth\n goal oriented\n software 🌟📈",
    "what's your speciality?": "uniqueness\n growth\n goal oriented\n software 🌟📈",
    "speciality": "uniqueness\n growth\n goal oriented\n software 🌟📈",
    "what is your area of expertise?": "uniqueness\n growth\n goal oriented\n software 🌟📈",
    "expertise": "uniqueness\n growth\n goal oriented\n software 🌟📈",
    "what industry are you in?": "we are in the ai, software, and cybersecurity industries 🌐",
    "industry": "we are in the ai, software, and cybersecurity industries 🌐",
    "what type of company is anti ai?": "anti ai is a private company in the field of ai and security technology.",
    "company type": "anti ai is a private company in the field of ai and security technology.",
    "are you in ai or software?": "we are in the ai, software, and cybersecurity industries 🌐",

    # Support and Customer Service
    "how do i contact support?": "our customer support is available via email and phone during our business hours 🕒",
    "support": "our customer support is available via email and phone during our business hours 🕒",
    "do you have customer service?": "our customer support is available via email and phone during our business hours 🕒",
    "can i get in touch with customer support?": "our customer support is available via email and phone during our business hours 🕒",
    "is there someone i can contact for support?": "our customer support is available via email and phone during our business hours 🕒",

    # Pricing
    "how much do your services cost?": "our pricing varies depending on the product or service. please reach out for a quote 📊",
    "pricing": "our pricing varies depending on the product or service. please reach out for a quote 📊",
    "what's the cost of your services?": "our pricing varies depending on the product or service. please reach out for a quote 📊",
    "how much is it?": "our pricing varies depending on the product or service. please reach out for a quote 📊",

    # Innovation
    "what innovations are you working on?": "our projects include anti.q music player, anti.0 security software, and anti.1 ai innovations 🎶🛡️🤖",
    "innovations": "our projects include anti.q music player, anti.0 security software, and anti.1 ai innovations 🎶🛡️🤖",
    "what’s innovative about anti ai?": "At Anti AI, we innovate ai solutions to protect and empower users.",
    "innovative": "at anti ai, we innovate ai solutions to protect and empower users.",
    "do you focus on innovation?": "at anti ai, we innovate ai solutions to protect and empower users.",
    "innovation focus": "at anti ai, we innovate ai solutions to protect and empower users.",
    "what new things are you doing in ai?": "at anti ai, we innovate ai solutions to protect and empower users.",

    # AI Technology and Security
    "how secure are your ai solutions?": "our ai solutions are designed with top-notch security to protect user data and privacy. 🛡️🤖",
    "security": "our ai solutions are designed with top-notch security to protect user data and privacy. 🛡️🤖",
    "is your ai safe?": "yes, we prioritize safety and security in all our ai systems, ensuring they are fully compliant with the latest security protocols. 🔐",
    "safe ai": "yes, we prioritize safety and security in all our ai systems, ensuring they are fully compliant with the latest security protocols. 🔐",
    "what makes your ai different?": "our ai is uniquely developed to safeguard and empower, focusing on innovative and secure solutions. 🤖🌟",
    "ai difference": "our ai is uniquely developed to safeguard and empower, focusing on innovative and secure solutions. 🤖🌟",
    "do you use machine learning in your solutions?": "yes, machine learning is at the core of many of our innovative solutions, enabling smarter, adaptive systems. 🤖📊",
    "machine learning": "yes, machine learning is at the core of many of our innovative solutions, enabling smarter, adaptive systems. 🤖📊",
    "how do you ensure ai safety?": "we employ robust testing, constant monitoring, and ethical guidelines to ensure the safety of all our ai technologies. 🔒🤖",
    "ai safety": "we employ robust testing, constant monitoring, and ethical guidelines to ensure the safety of all our ai technologies. 🔒🤖",
    
    
    "Thank you ": "Welcome",
    "Thanks": "I'm happy to help you ",
    "Bye":"Bye Bye , Have a nice day !",
    
    }
    
    
    
    # Tokenize the question and look for the best match
    tokens = tokenizer.tokenize(question.lower())
    best_match = max(general_question.keys(), key=lambda k: score_match(k, tokens), default=None)
    
    # Only return a matched response if it has a reasonable score, else return the strict message
    if best_match and score_match(best_match, tokens) > 0:
        return general_question[best_match]
    else:
        return "Please be more specific about the company and its services.\nThank you for understanding. "

@app.route('/apii', methods=['POST'])
def chat():
    data = request.get_json()
    question = data.get("message")

    print(f"User Question: {question}")

    # Check for a custom response or return strict message
    response = custom_responses(question)
    
    print(f"Response: {response}")
    
    # Return the response directly
    time.sleep(1)  # Simulate response delay for user experience
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
