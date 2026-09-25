export interface SkillItem {
  name: string;
  category: "Machine Learning" | "Computer Vision" | "NLP & Transformers" | "Backend / Deployment" | "Engineering & Tools";
  evidence: string;
  iconName?: string;
  highlight?: boolean;
}

export interface SkillCategoryGroup {
  id: string;
  name: string;
  description: string;
  badge: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategoryGroup[] = [
  {
    id: "machine-learning",
    name: "Machine Learning",
    description: "Core algorithms, deep neural architectures, mathematical formulations, and training optimization.",
    badge: "CORE FOUNDATION",
    skills: [
      { name: "Python", category: "Machine Learning", evidence: "Primary language across all production models & APIs", highlight: true },
      { name: "PyTorch", category: "Machine Learning", evidence: "Fine-tuning ConvNeXt Nano & Sentence Transformers", highlight: true },
      { name: "scikit-learn", category: "Machine Learning", evidence: "K-Means segmentation, pipeline transformation & metrics", highlight: true },
      { name: "XGBoost", category: "Machine Learning", evidence: "Gradient boosted trees for churn & purchase intent classification", highlight: true },
      { name: "Transformers", category: "Machine Learning", evidence: "Hugging Face models & custom tokenization pipelines", highlight: true },
      { name: "Sentence-Transformers", category: "Machine Learning", evidence: "Bi-encoder semantic representation & cosine ranking", highlight: true },
      { name: "Transfer Learning", category: "Machine Learning", evidence: "ImageNet pre-training adapted to 26 bovine classes", highlight: true },
      { name: "Model Quantization", category: "Machine Learning", evidence: "8-bit TorchScript optimization for ~30MB mobile deployment", highlight: true },
      { name: "SHAP", category: "Machine Learning", evidence: "TreeExplainer local attribution & feature impact analysis" }
    ]
  },
  {
    id: "computer-vision",
    name: "Computer Vision",
    description: "Visual feature extraction, edge AI deployment, and robust preprocessing under environmental constraints.",
    badge: "VISION SYSTEMS",
    skills: [
      { name: "CNNs", category: "Computer Vision", evidence: "Deep convolutional backbones for fine-grained image recognition", highlight: true },
      { name: "ConvNeXt Nano", category: "Computer Vision", evidence: "Modernized depthwise inverted bottleneck architecture", highlight: true },
      { name: "Image Classification", category: "Computer Vision", evidence: "26-class classification on 2,600+ field images (94.2% acc)", highlight: true },
      { name: "OpenCV", category: "Computer Vision", evidence: "Color space manipulation, adaptive thresholding & filtering", highlight: true },
      { name: "Canny Edge Detection", category: "Computer Vision", evidence: "Illumination-invariant boundary extraction pipeline", highlight: true },
      { name: "Data Augmentation", category: "Computer Vision", evidence: "Geometric perspective, affine, and color jitter invariance" },
      { name: "On-Device Inference", category: "Computer Vision", evidence: "Offline execution on Android CPU in under 25s", highlight: true }
    ]
  },
  {
    id: "nlp",
    name: "NLP & Transformers",
    description: "Contextual semantic representations, lexical extraction, and document ranking pipelines.",
    badge: "APPLIED NLP",
    skills: [
      { name: "Transformers", category: "NLP & Transformers", evidence: "Self-attention architectures & pooled embeddings", highlight: true },
      { name: "all-MiniLM-L6-v2", category: "NLP & Transformers", evidence: "Fine-tuned 22M parameter bi-encoder (r = 0.9733)", highlight: true },
      { name: "DistilBERT", category: "NLP & Transformers", evidence: "Knowledge distillation for lightweight document understanding" },
      { name: "Semantic Text Similarity", category: "NLP & Transformers", evidence: "Cosine distance with calibrated percentile scoring", highlight: true },
      { name: "Mean Pooling", category: "NLP & Transformers", evidence: "Attention-masked pooling over contextual token representations" },
      { name: "Skill Extraction & NER", category: "NLP & Transformers", evidence: "300+ technical skill vocabulary matcher & gap analysis", highlight: true },
      { name: "Document Parsing", category: "NLP & Transformers", evidence: "Structured token extraction from PDF, DOCX, and TXT files" }
    ]
  },
  {
    id: "deployment",
    name: "Backend & Model Serving",
    description: "Translating trained weights into secure, observable, high-throughput microservices and apps.",
    badge: "SYSTEMS & SERVING",
    skills: [
      { name: "FastAPI", category: "Backend / Deployment", evidence: "12 REST endpoints with Pydantic validation & OpenAPI docs", highlight: true },
      { name: "REST API Design", category: "Backend / Deployment", evidence: "Stateless JSON payloads, status codes, and error envelopes", highlight: true },
      { name: "Streamlit", category: "Backend / Deployment", evidence: "Full-fledged recruiter dashboards with Plotly visualizations", highlight: true },
      { name: "Gradio", category: "Backend / Deployment", evidence: "Interactive model test studio on Hugging Face Spaces", highlight: true },
      { name: "Hugging Face Spaces", category: "Backend / Deployment", evidence: "Continuous microservice hosting with UptimeRobot monitoring", highlight: true },
      { name: "Android APK Deployment", category: "Backend / Deployment", evidence: "Native offline TorchScript runtime for mobile edge execution", highlight: true },
      { name: "ChromaDB & NumPy Vectors", category: "Backend / Deployment", evidence: "Sub-100ms persistent embedding retrieval indices", highlight: true },
      { name: "Docker", category: "Backend / Deployment", evidence: "Containerized environments for deterministic deployment" }
    ]
  },
  {
    id: "engineering",
    name: "Engineering & Practices",
    description: "Software engineering discipline, version control, telemetry, and enterprise architecture.",
    badge: "ENGINEERING DISCIPLINE",
    skills: [
      { name: "Git & GitHub", category: "Engineering & Tools", evidence: "Version controlled repositories with clean branch workflows", highlight: true },
      { name: "Linux", category: "Engineering & Tools", evidence: "CLI server environments, bash scripting & file permissions" },
      { name: "Jupyter Notebooks", category: "Engineering & Tools", evidence: "Exploratory data analysis, diagnostic curves & validation runs" },
      { name: "Modular Architecture", category: "Engineering & Tools", evidence: "Strict decoupling of parsers, models, stores, and API controllers", highlight: true },
      { name: "ABAP Cloud & SAP RAP", category: "Engineering & Tools", evidence: "Clean Core enterprise architecture with SAP Certification" },
      { name: "Google Cloud Platform", category: "Engineering & Tools", evidence: "Cloud resource foundations & GenAI application development" }
    ]
  }
];
