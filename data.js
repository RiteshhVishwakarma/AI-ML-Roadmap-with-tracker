const roadmap = [
  {
    week: "1",
    title: "Python, Data Processing & ML Foundations",
    color: "#6c63ff",
    emoji: "🐍",
    difficulty: "Beginner Friendly",
    difficultyColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
    hours: "~40 hrs",
    why: "Every AI journey starts here. Without clean data and solid ML basics, your models will just be expensive guesswork.",
    funFact: "Netflix saves $1B/year using ML recommendations — all built on the same regression concepts you'll learn here.",
    sections: [
      {
        name: "Programming Languages & Libraries",
        topics: [
          "Python basics & advanced (list comprehensions, decorators, OOP)",
          "NumPy – arrays, broadcasting, linear algebra",
          "Pandas – DataFrames, groupby, merge, pivot",
          "Scikit-Learn – pipelines, train/test split"
        ]
      },
      {
        name: "Data Processing",
        topics: [
          "Data Cleaning – handling missing data, data imputation",
          "Data Transformation – normalization, standardization",
          "Feature Engineering – feature selection & extraction"
        ]
      },
      {
        name: "Supervised Learning",
        topics: [
          "Regression (Linear, Polynomial)",
          "Classification (Logistic Regression)",
          "Support Vector Machines (SVM)",
          "K-Nearest Neighbors (KNN)"
        ]
      },
      {
        name: "Evaluation Metrics",
        topics: [
          "Regression Metrics – MAE, MSE, R²",
          "Classification Metrics – Accuracy, Precision, Recall, F1 Score"
        ]
      }
    ],
    projects: [
      {
        title: "🏠 House Price Predictor",
        concept: "Linear Regression + Feature Engineering",
        desc: "Use the Boston/Ames Housing dataset. Clean nulls, engineer features (price per sqft, age of house), train a Linear Regression model, expose via Flask API. Frontend: input form → predicted price.",
        stack: ["Pandas", "Scikit-Learn", "Flask", "HTML/CSS/JS"],
        muscle: "Data cleaning pipeline + regression training loop"
      },
      {
        title: "🌸 Iris Flower Classifier",
        concept: "KNN + Classification Metrics",
        desc: "Classic but powerful. Train KNN with k=3,5,7 and compare F1 scores. Build a simple UI where user inputs petal/sepal dimensions and gets the flower species with confidence %.",
        stack: ["Scikit-Learn", "NumPy", "Flask", "Chart.js"],
        muscle: "Train/test split, confusion matrix, hyperparameter tuning"
      },
      {
        title: "📧 Spam Email Detector",
        concept: "Logistic Regression + Text Features",
        desc: "Use the SpamAssassin dataset. Extract features (word count, special chars, caps ratio). Train Logistic Regression. Show precision/recall tradeoff with a threshold slider in the UI.",
        stack: ["Pandas", "Scikit-Learn", "Vanilla JS"],
        muscle: "Feature extraction from text, binary classification, threshold tuning"
      },
      {
        title: "📊 Customer Segmentation Dashboard",
        concept: "Data Processing + EDA + Visualization",
        desc: "Take an e-commerce dataset. Clean it, normalize columns, compute RFM scores (Recency, Frequency, Monetary). Display interactive charts showing customer distribution.",
        stack: ["Pandas", "NumPy", "Chart.js", "FastAPI"],
        muscle: "Full data pipeline: raw CSV → cleaned → transformed → visualized"
      },
      {
        title: "🏋️ Fitness Score Predictor",
        concept: "SVM + Polynomial Regression",
        desc: "Dataset: age, weight, resting HR, VO2 max. Train SVM for fit/unfit classification AND polynomial regression for predicted fitness score. Compare both models' accuracy.",
        stack: ["Scikit-Learn", "Pandas", "Flask"],
        muscle: "Model comparison, SVM kernels, polynomial feature expansion"
      }
    ],
    assignment: [
      "Clean a real dataset from Kaggle (handle nulls, normalize columns)",
      "Train a KNN classifier on the Iris dataset and report F1 score",
      "Build a REST endpoint that returns model predictions as JSON"
    ]
  },
  {
    week: "2",
    title: "Neural Networks & Deep Learning",
    color: "#e94560",
    emoji: "🧠",
    difficulty: "Intermediate",
    difficultyColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    hours: "~50 hrs",
    why: "This is where AI gets its 'magic'. CNNs see images, LSTMs remember sequences — these are the building blocks of modern AI.",
    funFact: "GPT-4 is essentially a very deep neural network with ~1 trillion parameters. You'll understand how that works after this phase.",
    sections: [
      {
        name: "Unsupervised Learning",
        topics: [
          "Clustering – K-Means, Hierarchical",
          "Dimensionality Reduction – PCA, t-SNE",
          "Clustering Metrics – Silhouette Score, Davies-Bouldin Index"
        ]
      },
      {
        name: "Neural Networks",
        topics: [
          "Feedforward Neural Networks (FNN)",
          "Convolutional Neural Networks (CNN)",
          "Recurrent Neural Networks (RNN)",
          "Long Short-Term Memory (LSTM)",
          "Gated Recurrent Units (GRU)"
        ]
      },
      {
        name: "Deep Learning Frameworks",
        topics: [
          "TensorFlow – tensors, layers, model.fit()",
          "PyTorch – autograd, DataLoader, training loop",
          "Keras – Sequential & Functional API"
        ]
      },
      {
        name: "Transfer Learning",
        topics: [
          "Pretrained Models (VGG, ResNet, MobileNet)",
          "Fine-Tuning techniques"
        ]
      }
    ],
    projects: [
      {
        title: "🎨 CIFAR-10 Image Classifier",
        concept: "CNN from scratch",
        desc: "Build a CNN with Conv2D → MaxPool → Dropout → Dense layers on CIFAR-10. Track training/validation accuracy live. UI: drag-drop image → top-3 predictions with confidence bars.",
        stack: ["TensorFlow/Keras", "FastAPI", "JavaScript"],
        muscle: "CNN architecture design, overfitting detection, dropout tuning"
      },
      {
        title: "📈 Stock Price Forecaster",
        concept: "LSTM + Time Series",
        desc: "Use Yahoo Finance data. Normalize closing prices, create sliding window sequences, train LSTM. Plot predicted vs actual prices. Add a 7-day future forecast feature.",
        stack: ["PyTorch", "Pandas", "Chart.js", "Flask"],
        muscle: "Sequence modeling, sliding window, LSTM hidden state intuition"
      },
      {
        title: "🛍️ Customer Cluster Explorer",
        concept: "K-Means + PCA + t-SNE",
        desc: "Mall customer dataset. Run K-Means (k=3 to 8), plot silhouette scores to find optimal k. Reduce to 2D with PCA and t-SNE. Interactive scatter plot where you can hover over clusters.",
        stack: ["Scikit-Learn", "Pandas", "Chart.js"],
        muscle: "Unsupervised pipeline, dimensionality reduction, cluster visualization"
      },
      {
        title: "🐶 Dog Breed Identifier",
        concept: "Transfer Learning + Fine-Tuning",
        desc: "Fine-tune MobileNetV2 on Stanford Dogs dataset (120 breeds). Freeze base layers, train only top layers first, then unfreeze and fine-tune. UI: upload photo → breed + confidence.",
        stack: ["TensorFlow/Keras", "FastAPI", "Tailwind CSS"],
        muscle: "Transfer learning workflow, layer freezing, fine-tuning strategy"
      },
      {
        title: "✍️ Handwriting Digit Recognizer",
        concept: "FNN + CNN comparison",
        desc: "Build both a plain FNN and a CNN on MNIST. Compare accuracy, training time, and parameter count. Live canvas in the browser where user draws a digit and both models predict in real-time.",
        stack: ["TensorFlow.js", "Vanilla JS", "Canvas API"],
        muscle: "Model architecture comparison, TF.js browser inference, Canvas input"
      }
    ],
    assignment: [
      "Cluster customer data using K-Means and visualize with t-SNE",
      "Build an LSTM that predicts the next word in a sentence",
      "Fine-tune MobileNet on a custom 5-class dataset"
    ]
  },
  {
    week: "3",
    title: "NLP, Generative Models & Computer Vision",
    color: "#00b4d8",
    emoji: "💬",
    difficulty: "Intermediate+",
    difficultyColor: "text-orange-400 bg-orange-400/10 border-orange-400/30",
    hours: "~55 hrs",
    why: "ChatGPT, DALL·E, Google Lens — all of this lives here. NLP and CV are the two hottest AI domains right now.",
    funFact: "YOLO (You Only Look Once) can detect objects in real-time at 45 frames per second — faster than human reaction time.",
    sections: [
      {
        name: "Text Processing",
        topics: [
          "Tokenization",
          "Lemmatization",
          "Stemming"
        ]
      },
      {
        name: "Language Models",
        topics: [
          "Bag of Words (BoW)",
          "TF-IDF",
          "Word Embeddings – Word2Vec, GloVe",
          "Transformers – BERT, GPT"
        ]
      },
      {
        name: "NLP Applications",
        topics: [
          "Sentiment Analysis",
          "Named Entity Recognition (NER)",
          "Machine Translation"
        ]
      },
      {
        name: "Generative Models",
        topics: [
          "Generative Adversarial Networks (GANs)",
          "Variational Autoencoders (VAEs)"
        ]
      },
      {
        name: "Computer Vision",
        topics: [
          "Image Segmentation",
          "Object Detection",
          "Image Classification",
          "Edge Detection & Optical Flow",
          "YOLO (You Only Look Once)",
          "Faster R-CNN",
          "Mask R-CNN"
        ]
      }
    ],
    projects: [
      {
        title: "🗣️ Product Review Sentiment Analyzer",
        concept: "BERT Fine-tuning + NLP Pipeline",
        desc: "Fine-tune DistilBERT on Amazon product reviews. Full pipeline: tokenize → fine-tune → evaluate. UI: paste review text → sentiment (positive/negative/neutral) + confidence score + highlighted keywords.",
        stack: ["HuggingFace Transformers", "FastAPI", "Vanilla JS"],
        muscle: "Tokenization, attention masks, fine-tuning loop, inference pipeline"
      },
      {
        title: "📰 News Article Summarizer",
        concept: "Transformers + Text Generation",
        desc: "Use facebook/bart-large-cnn for summarization. Input: paste a long article or URL. Output: 3-sentence summary + key entities extracted via spaCy NER. Show original vs summary word count.",
        stack: ["HuggingFace", "spaCy", "FastAPI", "JS"],
        muscle: "Seq2seq models, NER pipeline, abstractive vs extractive summarization"
      },
      {
        title: "🔍 Real-Time Object Detector",
        concept: "YOLOv8 + Computer Vision",
        desc: "Run YOLOv8 on webcam stream or uploaded video. Draw bounding boxes with class labels and confidence. Add object count per frame and a timeline chart of detected objects over time.",
        stack: ["YOLOv8 (Ultralytics)", "OpenCV", "FastAPI", "JS"],
        muscle: "YOLO inference, bounding box drawing, real-time frame processing"
      },
      {
        title: "🎭 Face Emotion Detector",
        concept: "CNN + Image Classification + OpenCV",
        desc: "Train a CNN on FER-2013 dataset (7 emotions). Use OpenCV Haar cascades to detect faces first, then classify emotion. Live webcam feed with emotion label overlay and emoji.",
        stack: ["TensorFlow/Keras", "OpenCV", "FastAPI", "JS"],
        muscle: "Multi-class classification, face detection pipeline, real-time inference"
      },
      {
        title: "🖼️ Image Style Transfer App",
        concept: "VAE / Neural Style Transfer",
        desc: "Implement neural style transfer using VGG19 feature maps. User uploads a content image + picks a style (Van Gogh, Monet etc.). Show the stylized output with a before/after slider.",
        stack: ["TensorFlow", "PIL", "FastAPI", "JS"],
        muscle: "Feature map extraction, Gram matrix, iterative optimization loop"
      }
    ],
    assignment: [
      "Implement TF-IDF from scratch and compare with sklearn's version",
      "Fine-tune a BERT model on a sentiment dataset (SST-2)",
      "Run YOLO on a video file and annotate detected objects"
    ]
  },
  {
    week: "4",
    title: "Deployment, Ethical AI & Capstone",
    color: "#2ec4b6",
    emoji: "🚀",
    difficulty: "Advanced",
    difficultyColor: "text-red-400 bg-red-400/10 border-red-400/30",
    hours: "~45 hrs",
    why: "A model that isn't deployed is just a science experiment. This phase turns you from an AI learner into an AI engineer.",
    funFact: "Amazon's hiring algorithm was scrapped because it was biased against women — Ethical AI isn't optional, it's critical.",
    sections: [
      {
        name: "Model Serving",
        topics: [
          "Flask – REST API for ML models",
          "FastAPI – async endpoints, Pydantic schemas",
          "Model serialization (pickle, ONNX, SavedModel)"
        ]
      },
      {
        name: "Cloud Platforms",
        topics: [
          "AWS – S3, EC2, SageMaker basics",
          "Google Cloud – Vertex AI, Cloud Run",
          "Azure – Azure ML basics"
        ]
      },
      {
        name: "Reinforcement Learning",
        topics: [
          "Q-Learning",
          "Deep Q-Networks (DQN)",
          "Policy Gradient Methods"
        ]
      },
      {
        name: "Ethical AI",
        topics: [
          "Fairness – Bias Mitigation techniques",
          "Privacy – Data Anonymization",
          "Transparency – Explainable AI (XAI)",
          "SHAP & LIME for model explainability"
        ]
      }
    ],
    projects: [
      {
        title: "⚡ ML Model API with FastAPI",
        concept: "Model Serving + REST API Design",
        desc: "Take your House Price model from Phase 1. Serialize it with pickle + ONNX. Build a production-grade FastAPI service: versioned endpoints (/v1/predict), Pydantic validation, error handling, rate limiting, and auto-generated Swagger docs.",
        stack: ["FastAPI", "ONNX", "Pydantic", "Docker"],
        muscle: "Model serialization formats, API versioning, input validation, containerization"
      },
      {
        title: "🧠 DQN Game Agent",
        concept: "Deep Q-Network + Reinforcement Learning",
        desc: "Train a DQN agent to play CartPole-v1 using OpenAI Gym. Implement replay buffer, epsilon-greedy exploration, and target network. Plot reward curve over episodes. Watch the agent improve live.",
        stack: ["PyTorch", "OpenAI Gym", "Matplotlib"],
        muscle: "RL loop, experience replay, Q-value approximation, exploration vs exploitation"
      },
      {
        title: "🔍 Model Explainability Dashboard",
        concept: "SHAP + LIME + XAI",
        desc: "Take any trained classifier. Build a dashboard that shows: SHAP waterfall plots per prediction, LIME local explanations, feature importance bar chart, and a 'what-if' tool to change inputs and see how prediction changes.",
        stack: ["SHAP", "LIME", "FastAPI", "Chart.js"],
        muscle: "Global vs local explanations, SHAP values intuition, model transparency"
      },
      {
        title: "⚖️ Bias Audit Tool",
        concept: "Fairness + Ethical AI",
        desc: "Use the Adult Income dataset. Train a classifier. Measure bias across gender and race using fairness metrics (demographic parity, equalized odds). Build a report UI showing bias scores with fix suggestions.",
        stack: ["Fairlearn", "Scikit-Learn", "FastAPI", "JS"],
        muscle: "Fairness metrics, disparate impact, bias mitigation strategies"
      },
      {
        title: "🌐 Full-Stack AI Portfolio App",
        concept: "Capstone – Everything Combined",
        desc: "Multi-page app combining 3 AI features: Image Classifier + Sentiment Analyzer + House Price Predictor. Dockerized, deployed to cloud, CI/CD pipeline with GitHub Actions. Includes SHAP explanations and a bias audit page.",
        stack: ["FastAPI", "Docker", "GitHub Actions", "AWS/GCP", "SHAP"],
        muscle: "End-to-end ML system design, deployment pipeline, monitoring"
      }
    ],
    assignment: [
      "Deploy your sentiment model as a FastAPI service on a cloud platform",
      "Generate SHAP explanations for your house price model",
      "Write a 1-page bias audit for one of your models",
      "Containerize your app with Docker and push to a registry"
    ]
  }
];
