export interface PhilosophyPillar {
  step: string;
  number: string;
  title: string;
  principle: string;
  rationale: string;
  inPractice: string;
}

export const philosophyPillars: PhilosophyPillar[] = [
  {
    step: "STEP 01",
    number: "01",
    title: "Build from the problem, not the model",
    principle: "Algorithms exist to solve constraints, not satisfy academic curiosity.",
    rationale:
      "A complex 70B parameter model is useless if the user is a rural extension worker with an Android phone in a cellular blackout. Start with the compute, latency, and business boundaries before picking an architecture.",
    inPractice:
      "Quantized ConvNeXt Nano to ~30MB for offline Android execution rather than deploying an unfeasible server-side vision model."
  },
  {
    step: "STEP 02",
    number: "02",
    title: "Measure before optimizing",
    principle: "Subjective evaluation is a trap; calibrate metrics against human truth.",
    rationale:
      "High training accuracy often conceals severe dataset leakage or distribution shifts. True model performance requires rigorous correlation with ground-truth labels and real edge-case auditing.",
    inPractice:
      "Fine-tuned Sentence Transformers to achieve Pearson r = 0.9733 and verified 100% true-negative detection on human-annotated test sets."
  },
  {
    step: "STEP 03",
    number: "03",
    title: "Keep inference practical",
    principle: "A model that cannot be served cheaply will never survive production.",
    rationale:
      "Inference costs compound quickly. ML engineers must understand vector search complexity, CPU encoding bottlenecks, quantization, and batching trade-offs.",
    inPractice:
      "Engineered sub-0.06s CPU inference per document with persistent vector stores for sub-100ms retrieval without requiring continuous GPU spend."
  },
  {
    step: "STEP 04",
    number: "04",
    title: "Make models explainable when decisions matter",
    principle: "Black-box outputs erode trust; attribution drives operational confidence.",
    rationale:
      "High-stakes predictions—whether hiring candidate matching or enterprise churn prevention—require transparent feature contributions so domain experts can validate decisions.",
    inPractice:
      "Equipped Customer360 AI with SHAP TreeExplainer attributions and transparent skill gap matrices in SmartHire AI."
  },
  {
    step: "STEP 05",
    number: "05",
    title: "Treat deployment as part of ML engineering",
    principle: "An un-deployed model in a Jupyter Notebook is an unfinished experiment.",
    rationale:
      "Real ML engineering spans data ingestion, preprocessing, vector indexes, REST APIs, latency SLAs, uptime monitoring, and client consumption interfaces.",
    inPractice:
      "Authored 12 REST endpoints with FastAPI, deployed to Hugging Face Spaces with 24/7 UptimeRobot probes, and built interactive Streamlit/Gradio consoles."
  }
];
