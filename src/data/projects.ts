export interface ProjectPipelineStep {
  label: string;
  sublabel: string;
  description: string;
  badge?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  description: string;
  benchmark?: string;
}

export interface ProjectDetail {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: "NLP / Transformers" | "Computer Vision" | "Predictive ML & CRM" | "Enterprise Systems";
  featured: boolean;
  teamType: "Solo Project" | "Team Project";
  role: string;
  period: string;
  summary: string;
  tags: string[];
  metrics: ProjectMetric[];
  pipeline: ProjectPipelineStep[];
  screenshots?: Array<{
    src: string;
    caption: string;
  }>;
  problem: string;
  approach: string;
  architecture: string;
  model: string;
  engineering: string;
  challenges: string;
  result: string;
  links: {
    liveDemo?: string;
    github?: string;
    huggingFace?: string;
    apiDocs?: string;
  };
}

export const projectsData: ProjectDetail[] = [
  {
    id: "smarthire-ai",
    number: "01",
    title: "SmartHire AI",
    subtitle: "Transformer-Based Resume & Job Matching System",
    category: "NLP / Transformers",
    featured: true,
    teamType: "Solo Project",
    role: "ML & Backend Engineer (Sole Author)",
    period: "Jun 2026 – Jul 2026",
    summary:
      "Context-aware recruitment intelligence engine that replaces primitive ATS keyword matching with fine-tuned Sentence Transformer embeddings, persistent vector indexing, and calibrated semantic ranking.",
    tags: [
      "Python",
      "PyTorch",
      "Transformers",
      "all-MiniLM-L6-v2",
      "FastAPI",
      "Streamlit",
      "ChromaDB",
      "Hugging Face Spaces"
    ],
    metrics: [
      {
        label: "Pearson Correlation",
        value: "0.9733",
        description: "Correlation against human-labeled resume-JD relevance benchmarks",
        benchmark: "+9.4% gain over base model"
      },
      {
        label: "Spearman Rank (ρ)",
        value: "0.9604",
        description: "Monotonic ranking correlation across diverse candidate profiles",
        benchmark: "High rank preservation"
      },
      {
        label: "Mismatch Detection",
        value: "100%",
        description: "Zero false positive classification on completely irrelevant candidate-JD pairs",
        benchmark: "44/44 test cases"
      },
      {
        label: "Inference Latency",
        value: "<0.06s",
        description: "Per-resume encoding speed on standard CPU; 100 candidates ranked in <6s",
        benchmark: "Sub-100ms vector search"
      }
    ],
    pipeline: [
      {
        label: "Input Ingestion",
        sublabel: "PDF / DOCX / TXT",
        description: "Multi-format file parsing via pdfplumber and python-docx with structural sanitization."
      },
      {
        label: "Text Preprocessing",
        sublabel: "Normalization & Chunking",
        description: "Cleaning pipeline chunking long documents into 400-token windows with 50-token overlap."
      },
      {
        label: "Transformer Representation",
        sublabel: "all-MiniLM-L6-v2",
        description: "Tokenization, transformer forward pass, mean pooling, and L2 unit-norm embedding generation."
      },
      {
        label: "Skill & Semantic Scoring",
        sublabel: "Cosine Sim + NER",
        description: "300+ skill vocabulary extraction combined with calibrated cosine similarity scoring."
      },
      {
        label: "Composite Ranking",
        sublabel: "70% Sem + 30% Skill",
        description: "Weighted rank synthesis delivering 4 recommendation tiers, missing skills, and AI insights."
      },
      {
        label: "Serving & Vector Index",
        sublabel: "FastAPI + ChromaDB",
        description: "12 REST endpoints on Hugging Face Spaces with persistent ChromaDB/NumPy vector indexing."
      }
    ],
    screenshots: [
      {
        src: "/projects/smarthire-dashboard.png",
        caption: "Interactive Recruiter Dashboard: multi-resume analysis with calibrated match score distributions."
      },
      {
        src: "/projects/smarthire-matching.png",
        caption: "Deep semantic alignment analysis: candidate scoring vs detailed JD requirements."
      },
      {
        src: "/projects/smarthire-skills.png",
        caption: "Automated skill gap breakdown: matched skills, missing competencies, and critical requirements."
      },
      {
        src: "/projects/smarthire-ranking.png",
        caption: "Candidate leaderboard with dynamic action recommendations and AI diagnostic insights."
      },
      {
        src: "/projects/smarthire-vectordb.png",
        caption: "Persistent vector index management: sub-100ms search across pre-embedded candidate collections."
      }
    ],
    problem:
      "Conventional Applicant Tracking Systems (ATS) rely on brittle lexical search and keyword frequency heuristics. Qualified candidates who articulate accomplishments with non-verbatim synonyms are frequently dropped, while candidates stuffing buzzwords are falsely promoted.",
    approach:
      "Constructed a semantic representation pipeline centered on fine-tuning a Sentence Transformer (all-MiniLM-L6-v2) using CosineSimilarityLoss on 127 carefully annotated resume-JD pairs spanning 41 specialized tech roles (34% strong matches, 31% partial matches, 35% hard mismatches). Augmented raw semantic proximity with an automated 300+ domain skill vocabulary extractor to balance broad context against non-negotiable prerequisites.",
    architecture:
      "Decoupled microservice architecture: raw resume streams are parsed and normalized into structured token spans, passed through the fine-tuned PyTorch model for mean-pooled 384-dimensional embeddings, and indexed into ChromaDB (with automatic NumPy flat-file fallback). A FastAPI application layer serves 12 REST endpoints consumed by a rich Streamlit analytics studio and external HTTP clients.",
    model:
      "Fine-tuned Sentence Transformer (`all-MiniLM-L6-v2`, 22M parameters) using CosineSimilarityLoss over 6 epochs. Calibrated cosine similarity to 0-100% ranges with empirical distribution thresholds: ≥60% Highly Recommended, 38-60% Recommended, 18-38% Consider, <18% Mismatch.",
    engineering:
      "Built for CPU cost-efficiency: average resume encoding takes ~0.06 seconds. 100 candidate resumes evaluate in under 6 seconds end-to-end. Integrated a pre-computed vector index endpoint permitting sub-100ms searches against large applicant pools without re-encoding historical resumes.",
    challenges:
      "Handling document length disparities and noisy layout artifacts from diverse PDF converters without truncating pivotal project details. Resolved by implementing sliding-window 400-token chunking with 50-token stride, aggregating chunk embeddings via weighted pooling before scoring.",
    result:
      "Achieved Pearson correlation r = 0.9733 and Spearman rank correlation ρ = 0.9604 against human ground-truth rankings (+9.4% accuracy improvement over the un-tuned base model). 100% precision on true mismatch detection. Deployed live with public Swagger docs and interactive Streamlit UI.",
    links: {
      liveDemo: "https://smarthire-ai.streamlit.app",
      github: "https://github.com/Vishu200672/SmartHire-AI",
      huggingFace: "https://huggingface.co/spaces/Vishu2006/SmartHire-AI"
    }
  },
  {
    id: "breed-recognizer",
    number: "02",
    title: "Cattle & Buffalo Breed Recognizer",
    subtitle: "Computer Vision Classification System",
    category: "Computer Vision",
    featured: true,
    teamType: "Team Project",
    role: "Computer Vision & Model Deployment Lead",
    period: "Jan 2026 – Apr 2026",
    summary:
      "On-device Computer Vision pipeline fine-tuning ConvNeXt Nano to identify 26 indigenous Indian bovine breeds from field photography, quantized into an offline ~30MB Android APK for rural agricultural workers.",
    tags: [
      "PyTorch",
      "ConvNeXt",
      "OpenCV",
      "Transfer Learning",
      "Model Quantization",
      "Android APK",
      "Hugging Face",
      "Edge AI"
    ],
    metrics: [
      {
        label: "Test Accuracy",
        value: "94.2%",
        description: "Evaluation accuracy across 26 distinct Indian cattle and buffalo classes",
        benchmark: "Held-out test split"
      },
      {
        label: "Bovine Classes",
        value: "26 Breeds",
        description: "Indigenous breeds including Gir, Sahiwal, Murrah, Jaffarabadi, Kankrej",
        benchmark: "2,600+ curated images"
      },
      {
        label: "Package Footprint",
        value: "~30 MB",
        description: "Post-quantization compressed APK size suitable for low-storage mobile devices",
        benchmark: "Zero cloud dependency"
      },
      {
        label: "Inference Latency",
        value: "<25 sec",
        description: "Full on-device CPU execution on budget Android hardware without network signal",
        benchmark: "Field verified"
      }
    ],
    pipeline: [
      {
        label: "Field Capture",
        sublabel: "Raw Photography",
        description: "User capture in unconstrained rural environments across variable daylight, mud, and clutter."
      },
      {
        label: "Vision Preprocessing",
        sublabel: "Canny Edge + Filtering",
        description: "Edge-preserving linear filters and adaptive histogram equalization mitigating environmental noise."
      },
      {
        label: "Backbone Architecture",
        sublabel: "ConvNeXt Nano",
        description: "Modernized convolutional architecture with depthwise separable layers and inverted bottlenecks."
      },
      {
        label: "Transfer Learning",
        sublabel: "PyTorch Fine-Tuning",
        description: "Two-stage training: frozen backbone warm-up followed by fine-tuning top 3 convolutional blocks."
      },
      {
        label: "Quantization & Export",
        sublabel: "TorchScript / PyTorch Mobile",
        description: "8-bit weight quantization compressing model payload down to ~30MB APK binary."
      },
      {
        label: "Offline Edge Delivery",
        sublabel: "Android Native App",
        description: "Zero-latency, 100% offline inference on low-cost Android hardware with local breed dossier."
      }
    ],
    problem:
      "Veterinary extension workers, dairy farmers, and breeding authorities across rural India struggle to reliably identify indigenous cattle and buffalo breeds. Precise identification is critical for government livestock subsidies, selective breeding, and genetic conservation, but rural farms frequently lack cellular connectivity.",
    approach:
      "Trained a transfer learning classifier on ConvNeXt Nano in PyTorch over a dataset of 2,600+ images spanning 26 indigenous breeds. Built a specialized Canny edge detection and linear filtering preprocessing pipeline to standardize illumination fluctuations, then quantized the PyTorch model for native on-device Android deployment without requiring internet access.",
    architecture:
      "End-to-end edge pipeline: captured camera frames pass through an on-device OpenCV preprocessing filter, feed into the quantized TorchScript model, and output top-k breed probabilities with confidence intervals and breed characteristics. The entire application runs natively within a ~30MB standalone APK.",
    model:
      "ConvNeXt Nano pretrained on ImageNet-1K, adapted with a customized classification head for 26 Indian bovine breeds. Utilized aggressive geometric augmentations (random affine, perspective transforms, color jitter) to prevent overfitting on subtle coat color variations.",
    engineering:
      "Addressed target hardware constraints (low-RAM Android devices): applied dynamic post-training quantization, pruned redundant channel weights, and optimized memory allocation loops in the Android runtime, achieving sub-25 second inference on budget mobile processors.",
    challenges:
      "Candid Engineering Reality: The primary generalization constraint was dataset scale (2,600 total images across 26 classes, averaging ~100 images per breed). High intra-class morphological variance (e.g. wet vs dry coat, young vs mature animals) and inter-class similarity between specific buffalo breeds caused initial confusion. Solved through hard-negative mining and structured contrast enhancement, scoping expanded field dataset collection as the immediate hardening step.",
    result:
      "Achieved 94.2% top-1 accuracy on the held-out test split, maintaining within ~1% accuracy variance across direct sunlight, shaded pens, and rainy conditions. Fully verified in working Android APK and documented on Hugging Face.",
    links: {
      github: "https://github.com/Vishu200672/Breed-Recognizer",
      huggingFace: "https://huggingface.co/Vishu2006/BPA"
    }
  },
  {
    id: "customer360-ai",
    number: "03",
    title: "Customer360 AI",
    subtitle: "Machine Learning Intelligence Engine for CRM",
    category: "Predictive ML & CRM",
    featured: true,
    teamType: "Solo Project",
    role: "ML Architect & Backend Developer",
    period: "Aug 2026 – Sep 2026",
    summary:
      "Production machine learning intelligence engine synthesizing RFM customer signals, K-Means clustering, XGBoost churn & purchase intent predictions, CLV regression, and SHAP explainability into automated Next Best Action workflows.",
    tags: [
      "Python",
      "XGBoost",
      "scikit-learn",
      "SHAP",
      "FastAPI",
      "Gradio",
      "Joblib",
      "Feature Engineering",
      "Hugging Face Spaces"
    ],
    metrics: [
      {
        label: "Segmentation Depth",
        value: "5 Clusters",
        description: "Distinct behavioural cohorts discovered via K-Means with Silhouette validation",
        benchmark: "RFM + Engagement signals"
      },
      {
        label: "Predictive Suite",
        value: "4 ML Models",
        description: "Churn (XGBoost), Purchase Intent (XGBoost), CLV (Regressor), K-Means Segmenter",
        benchmark: "ROC-AUC validated"
      },
      {
        label: "Interpretability",
        value: "SHAP Values",
        description: "Local TreeExplainer feature attributions explaining individual prediction drivers",
        benchmark: "Exact marginal contributions"
      },
      {
        label: "System Health",
        value: "24/7 Monitoring",
        description: "Automated UptimeRobot probe against production `/health` and `/demo-predict` endpoints",
        benchmark: "ZeroGPU & CPU verified"
      }
    ],
    pipeline: [
      {
        label: "Raw Signals",
        sublabel: "Transaction & Activity",
        description: "Ingesting purchase timestamps, order frequency, session telemetry, and support tickets."
      },
      {
        label: "Feature Engineering",
        sublabel: "RFM + Trend Derivatives",
        description: "Transforming raw records into normalized Recency, Frequency, Monetary, and engagement drift features."
      },
      {
        label: "Cohort Segmentation",
        sublabel: "K-Means (5 Clusters)",
        description: "Discovering high-value champions, loyalists, potential defectors, and dormant accounts."
      },
      {
        label: "Dual XGBoost Classifiers",
        sublabel: "Churn & Propensity",
        description: "Gradient boosted trees estimating likelihood of imminent attrition and next-purchase probability."
      },
      {
        label: "CLV & SHAP Explainability",
        sublabel: "TreeExplainer",
        description: "Estimating residual Customer Lifetime Value alongside individual feature contribution scores."
      },
      {
        label: "Next Best Action (NBA)",
        sublabel: "Automated Rule Engine",
        description: "Synthesizing risk scores and value tiers into concrete operational retention and upsell directives."
      }
    ],
    problem:
      "Enterprise customer relationship management platforms store massive transactional telemetry but fail to surface predictive, actionable intelligence. Business teams are forced to react to customer churn after users have already canceled, rather than intervening during early behavioral drift.",
    approach:
      "Architected an automated multi-task machine learning system combining unsupervised RFM segmentation with supervised gradient boosted decision trees (XGBoost) for churn and purchase propensity, followed by SHAP value calculations to turn black-box predictions into interpretable business reasons.",
    architecture:
      "Data pipeline transforms raw customer signal tables into engineered feature matrices. Pre-trained model artifacts serialized via Joblib are loaded into a persistent inference service exposed via FastAPI endpoints (`/health`, `/demo-predict`) and an interactive Gradio Model Studio deployed on Hugging Face Spaces.",
    model:
      "Ensemble of scikit-learn K-Means (k=5) for macro segmentation, paired with two tuned XGBoost classifiers for binary churn probability and high-intent purchase propensity, plus a continuous regressor for Customer Lifetime Value (CLV). Explainability powered by SHAP TreeExplainer.",
    engineering:
      "Engineered an automated Next Best Action (NBA) rules engine mapping churn probability vectors and CLV deciles directly into operational playbooks (e.g. VIP Concierge Outreach, Win-back Discount, Proactive Onboarding Assist). Deployed with API key authentication (`X-API-Key`) and continuous 24/7 UptimeRobot monitoring.",
    challenges:
      "Mitigating class imbalance in customer churn events without skewing continuous CLV estimates. Addressed via scale_pos_weight optimization in XGBoost and stratified cross-validation splits to maintain calibrated probability outputs.",
    result:
      "Delivered a live, publicly accessible ML intelligence engine running on Hugging Face Spaces with dual UI/API access, real-time SHAP waterfall attributions, and end-to-end telemetry.",
    links: {
      huggingFace: "https://huggingface.co/spaces/Vishu2006/customer"
    }
  },
  {
    id: "smarthire-enterprise",
    number: "04",
    title: "SmartHire Onboarding Tracker",
    subtitle: "Enterprise Workflow & Backend Architecture",
    category: "Enterprise Systems",
    featured: false,
    teamType: "Solo Project",
    role: "Backend & Systems Developer",
    period: "May 2026 – Jun 2026",
    summary:
      "Enterprise onboarding tracking system built using SAP RAP (RESTful Application Programming), ABAP Cloud, Core Data Services (CDS) views, and SAP Fiori UI—demonstrating architectural range across enterprise backend systems.",
    tags: [
      "ABAP Cloud",
      "SAP RAP",
      "CDS Views",
      "SAP BTP",
      "SAP Fiori",
      "Enterprise Architecture"
    ],
    metrics: [
      {
        label: "Architecture Paradigm",
        value: "SAP RAP",
        description: "Modern RESTful Application Programming Model with strict clean-core ABAP Cloud",
        benchmark: "Clean Core compliant"
      },
      {
        label: "Data Modeling",
        value: "CDS Views",
        description: "Hierarchical Core Data Services views handling transactional lifecycle transitions",
        benchmark: "Optimized SQL pushdown"
      },
      {
        label: "UI Standard",
        value: "SAP Fiori",
        description: "Enterprise UI Elements configured via standardized OData V4 services",
        benchmark: "Role-based authorization"
      }
    ],
    pipeline: [
      {
        label: "Employee Ingestion",
        sublabel: "RAP Business Object",
        description: "Creating transactional draft-enabled onboarding entities with automatic ID generation."
      },
      {
        label: "Data Modeling",
        sublabel: "CDS View Entities",
        description: "Defining relational projections, associations, and semantic annotations for OData exposure."
      },
      {
        label: "Business Logic",
        sublabel: "Behavior Implementation",
        description: "ABAP Cloud validations, determinations, and state transition actions ensuring compliance."
      },
      {
        label: "Service Exposure",
        sublabel: "OData V4 Service Binding",
        description: "Publishing secure, stateless RESTful service bindings consumed by enterprise clients."
      },
      {
        label: "Enterprise Presentation",
        sublabel: "SAP Fiori Elements",
        description: "Responsive enterprise dashboard surfacing onboarding progression and SLA tracking."
      }
    ],
    problem:
      "Complex corporate hiring cycles fragment employee onboarding workflows across disparate spreadsheets and disjointed tools, creating compliance bottlenecks and lack of auditability.",
    approach:
      "Constructed a clean-core SAP RAP business application on SAP BTP using ABAP Cloud, separating database persistence, business object behaviors, and OData service bindings from presentation.",
    architecture:
      "Three-tier enterprise architecture: CDS data definition layer with associations, RAP behavior definition/implementation layer handling state machine transitions, and OData V4 service definition consumed by standard SAP Fiori List Report applications.",
    model:
      "Deterministic enterprise state machine governing candidate compliance milestones from background verification to equipment provisioning.",
    engineering:
      "Strict compliance with SAP Clean Core guidelines, utilizing modern ABAP 7.5+ syntax and managed draft handling for atomic multi-user editing.",
    challenges:
      "Enforcing strict transactional consistency across asynchronous external verification checks. Solved using RAP determinations and managed save sequences.",
    result:
      "Successfully certified on Credly as an SAP Certified Back-End Developer – ABAP Cloud, demonstrating versatility across machine learning engineering and enterprise backend infrastructure.",
    links: {
      github: "https://github.com/Vishu200672"
    }
  }
];
