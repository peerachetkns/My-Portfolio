import React from 'react';
import { motion } from 'framer-motion';

function App() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="bg-zinc-800 min-h-screen font-sans text-zinc-200 selection:bg-[#00b4d8]/30 selection:text-white pb-20 overflow-hidden">
      
      {/* Navigation Bar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full bg-zinc-800/80 backdrop-blur-md z-50 border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-light text-xl tracking-[0.2em] text-white">Peerachet Khanitson<span className="text-[#00b4d8]"></span></span>
          <div className="flex items-center gap-8 md:gap-10 text-sm font-light text-zinc-300 tracking-widest">
            <div className="hidden md:flex gap-10">
              <a href="#about" className="hover:text-[#00b4d8] transition-colors duration-300">About</a>
              <a href="#skills" className="hover:text-[#00b4d8] transition-colors duration-300">Skills</a>
              <a href="#projects" className="hover:text-[#00b4d8] transition-colors duration-300">Projects</a>
              <a href="#contact" className="hover:text-[#00b4d8] transition-colors duration-300">Contact</a>
            </div>
            {/* Resume Button */}
            <a 
              href="/Peerachet.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-[#00b4d8] text-[#00b4d8] px-4 py-1.5 rounded-full hover:bg-[#00b4d8] hover:text-zinc-900 transition-all duration-300 shadow-[0_0_10px_rgba(0,180,216,0.2)]"
            >
              Resume
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex-1 space-y-8 text-center md:text-left"
        >
          {/* ปรับ Title ให้ครอบคลุมกว้างขึ้น */}
          <motion.p variants={fadeUp} className="text-[#00b4d8] font-light tracking-[0.3em] uppercase text-base md:text-lg">
            AI / Machine Learning Engineer
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extralight leading-tight text-white">
            Peerachet <span className="font-medium text-zinc-300">Khanitson</span>
          </motion.h1>
          {/* ปรับ Subtitle ดึงดูดทั้ง ML, DE, DS */}
          <motion.p variants={fadeUp} className="text-zinc-300 text-lg leading-relaxed max-w-xl font-light mx-auto md:mx-0">
            AI and Machine Learning Engineer with a solid foundation in Computer Engineering. Experienced in building robust data pipelines, developing predictive models, and deploying scalable AI solutions to transform raw data into business value.
          </motion.p>
          <motion.div variants={fadeUp} className="flex gap-6 pt-4 justify-center md:justify-start">
            <a href="#projects" className="bg-[#00b4d8] text-zinc-900 px-8 py-3 rounded-full font-medium hover:bg-[#48cae4] transition-all duration-300 shadow-[0_0_20px_rgba(0,180,216,0.3)] hover:shadow-[0_0_30px_rgba(0,180,216,0.5)] transform hover:-translate-y-1">
              View Projects
            </a>
            <a href="#contact" className="border border-zinc-500 text-white px-8 py-3 rounded-full hover:border-[#00b4d8] hover:text-[#00b4d8] transition-all duration-300 transform hover:-translate-y-1">
              Let's Talk
            </a>
          </motion.div>
        </motion.div>
        
        {/* Profile picture */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 mx-auto mt-16"
        >
          <div className="absolute inset-0 rounded-full border border-[#00b4d8] opacity-40 shadow-[0_0_30px_rgba(0,180,216,0.2)] animate-pulse"></div>
          <div className="absolute inset-2 md:inset-3 rounded-full border border-[#00b4d8] opacity-60"></div>
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0077b6_0%,_#1a1a1a_70%)]"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-[130%] rounded-b-full overflow-hidden z-10">
            <img 
              src="/peerachet.png" 
              alt="Peerachet Profile" 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[92%] h-auto object-bottom drop-shadow-xl" 
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 bg-zinc-700/20"></div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-light mb-8 text-white">Professional <span className="font-semibold">Summary</span></h2>
            <p className="text-zinc-300 leading-relaxed mb-6 font-light">
              Hello, I am a Computer Engineering graduate from <span className="font-medium text-[#00b4d8]">Mae Fah Luang University</span> with a strong passion for Artificial Intelligence and Machine Learning.
            </p>
            <p className="text-zinc-300 leading-relaxed font-light">
              I bring hands-on experience in tackling real-world challenges through data analysis and predictive modeling. Highly driven and results-oriented, I am looking forward to bridging the gap between complex data and intelligent solutions while advancing my career as an AI Engineer.
            </p>
          </motion.div>
          
          {/* Education Card */}
          <motion.div variants={fadeUp} className="bg-zinc-700/40 backdrop-blur-sm p-10 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl hover:border-[#00b4d8]/30 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <svg className="w-6 h-6 text-[#00b4d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 3v-1.5a.75.75 0 011.5 0V18a.75.75 0 01-1.5 0z" />
              </svg>
              <h3 className="text-xl font-light text-white">Education</h3>
            </div>
            
            <p className="text-lg text-white font-medium">Bachelor of Engineering</p>
            <p className="text-[#00b4d8] mb-2 font-light tracking-wide">Computer Engineering</p>
            <p className="text-zinc-400 text-sm mb-6 font-light">Mae Fah Luang University (First Class Honors)</p>
            
            <span className="inline-block px-5 py-2 bg-zinc-800 border border-[#00b4d8]/30 rounded-full text-sm font-light text-zinc-200 shadow-[0_0_15px_rgba(0,180,216,0.15)]">
              GPAX: <span className="text-[#00b4d8] font-semibold text-base">3.68</span>
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-light text-center mb-4 text-white">Technical <span className="font-semibold">Skills</span></h2>
          <p className="text-center text-zinc-400 mb-16 font-light tracking-wide">Comprehensive toolkit spanning programming languages, machine learning, data engineering, and enterprise application tools.</p>
        </motion.div>
        
        {/* จัดหมวดหมู่ใหม่ให้มี Data Engineering + Database */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            {
              title: "Programming & Databases",
              icon: (
                <svg className="w-6 h-6 text-[#00b4d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              ),
              skills: ['Python', 'SQL (MySQL)', 'Java', 'C#', 'JavaScript', 'React', 'Flutter (Dart)', 'Firebase Firestore']
            },
            {
              title: "ML & Deep Learning",
              icon: (
                <svg className="w-6 h-6 text-[#00b4d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 4.206c.16.48-.198 1.004-.702 1.004H3.5c-.504 0-.862-.524-.702-1.004L4.2 15.3" />
                </svg>
              ),
              skills: ['Classification/Regression', 'Ensemble (RF, ET, GB)', 'Deep Learning (CNN, LSTM)', 'Predictive Modeling', 'Cross-Validation', 'Key Metrics (ROC-AUC)']
            },
            {
              title: "Data Engineering & Analytics",
              icon: (
                <svg className="w-6 h-6 text-[#00b4d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              ),
              skills: ['Data Pipelines / ETL', 'Data Preprocessing', 'Feature Engineering', 'Image Processing (CV)', 'Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow/Keras', 'Power BI']
            },
            {
              title: "Tools & Enterprise Automation",
              icon: (
                <svg className="w-6 h-6 text-[#00b4d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              ),
              skills: ['Git & GitHub', 'VS Code', 'Colab', 'Microsoft Power Apps', 'Power Automate', 'SharePoint List', 'Excel VBA']
            }
          ].map((category, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="bg-zinc-700/30 p-8 rounded-2xl border border-white/10 hover:border-[#00b4d8]/40 hover:bg-zinc-700/50 transition-colors duration-300 group shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                  {category.icon}
                  <h3 className="font-medium text-lg text-white group-hover:text-[#00b4d8] transition-colors">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-4 py-1.5 bg-zinc-800 border border-white/10 text-xs font-light tracking-wide rounded-full text-zinc-300 group-hover:border-[#00b4d8]/30 transition-colors shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="absolute inset-0 bg-zinc-700/20"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-light mb-16 text-center text-white"
          >
            Selected <span className="font-semibold">Works</span>
          </motion.h2>
          
          <div className="space-y-32">
            
            {/* Project 1: FEATURED SENIOR PROJECT */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="group"
            >
              {/* Header & Overview */}
              <div className="flex flex-col md:flex-row gap-12 items-start mb-12">
                
                {/* ด้านซ้าย - ใช้รูปภาพ */}
                <motion.div variants={fadeUp} className="w-full md:w-[55%] aspect-video bg-[#1a1a1c] rounded-xl overflow-hidden border border-zinc-700/50 relative shadow-lg">
                  <img 
                    src="/PM2.5.png" 
                    alt="PM2.5 Classification" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </motion.div>
                
                {/* ด้านขวา - เนื้อหาและข้อมูล */}
                <motion.div variants={fadeUp} className="w-full md:w-[45%] space-y-5 pt-2">
                  <div className="text-xs font-semibold text-[#00b4d8] tracking-[0.15em] uppercase">
                    SENIOR PROJECT
                  </div>
                  <h3 className="text-3xl font-normal text-white">PM2.5 Level Classification</h3>
                  <p className="text-zinc-300 leading-relaxed font-light text-base">
                    Developed a multi-class machine learning pipeline to classify PM2.5 into 5 levels based on Thai Air Quality Standards. Handled meteorological datasets, engineered features using trigonometric encoding, and solved severe class imbalance with Borderline-SMOTE. Through comprehensive comparative research against various ML and DL algorithms, the Extra Trees ensemble was proven to be the most effective, achieving 92.7% Accuracy and 99.3% ROC-AUC.
                  </p>
                  
                  {/* ปุ่ม Tag แบบขอบใส (Ghost Buttons) */}
                  <div className="flex flex-wrap gap-3 pt-2 pb-6">
                    {['Python', 'Scikit-Learn', 'SMOTE', 'Data Pipeline'].map(tag => (
                      <span key={tag} className="text-sm font-light px-4 py-1.5 bg-transparent border border-zinc-600 rounded-full text-zinc-300 hover:border-[#00b4d8]/50 hover:text-white transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* ลิงก์ View Source Code */}
                  <a href="https://github.com/peerachetkns/PM2.5" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-light text-white hover:text-[#00b4d8] transition-colors group/link">
                    View Source Code 
                    <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </a>
                </motion.div>
              </div>

              {/* Deep Dive Grid - ปรับหัวข้อแรกให้มีคำว่า ETL/Pipeline */}
              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-zinc-800/50 p-6 rounded-xl border border-white/5 hover:border-[#00b4d8]/30 transition-all">
                  <div className="text-[#00b4d8] mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                  </div>
                  <h4 className="text-white font-medium mb-2">ETL & Feature Engineering</h4>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">
                    Built an end-to-end data pipeline to ingest and clean raw meteorological datasets. Applied trigonometric encoding (sin/cos) for wind directions, median imputation for missing values, and threshold capping for outlier management.
                  </p>
                </div>

                <div className="bg-zinc-800/50 p-6 rounded-xl border border-white/5 hover:border-[#00b4d8]/30 transition-all">
                  <div className="text-[#00b4d8] mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                  </div>
                  <h4 className="text-white font-medium mb-2">Feature Scaling & Imbalance</h4>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">
                    Categorized PM2.5 into 5 discrete levels based on Thai Air Quality Standards. Applied Min-Max Normalization to ensure model stability and addressed severe class imbalance using the Borderline-SMOTE oversampling technique.
                  </p>
                </div>

                <div className="bg-zinc-800/50 p-6 rounded-xl border border-white/5 hover:border-[#00b4d8]/30 transition-all">
                  <div className="text-[#00b4d8] mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                  </div>
                  <h4 className="text-white font-medium mb-2">Comparative Research</h4>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">
                    Conducted extensive research benchmarking various architectures including Decision Tree, Random Forest, Gradient Boosting, KNN, SVM, CNN, and LSTM. The <strong className="text-zinc-200">Extra Trees (ET)</strong> model outperformed all others, achieving <strong className="text-[#00b4d8]">92.7% Accuracy</strong> and <strong className="text-[#00b4d8]">99.3% ROC-AUC</strong>.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* Project 2 (Standard Size - Expanded & Brightened) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="flex flex-col md:flex-row-reverse gap-12 items-center group"
            >
              <motion.div variants={fadeUp} className="w-full md:w-[60%] aspect-[16/10] bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl">
                 <img 
                   src="/MasterProject.png" 
                   alt="META-Master System" 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                 />
              </motion.div>
              
              <motion.div variants={fadeUp} className="w-full md:w-[40%] space-y-6">
                <span className="text-xs font-medium text-[#00b4d8] tracking-[0.2em]">INTERNSHIP</span>
                <h3 className="text-3xl font-light text-white group-hover:text-[#00b4d8] transition-colors duration-300">META-Master System</h3>
                <p className="text-zinc-300 leading-relaxed font-light">
                  Digitized organizational workflows during an internship at Mitsubishi Electric Thai Auto-Parts Co., Ltd.
                  Developed a centralized Power Apps solution with a minimalist UI and automated data syncing via Power Automate to boost operational efficiency and reduce manual errors.
                </p>
                <div className="flex gap-3 pb-4">
                  <span className="text-xs font-light px-3 py-1 bg-zinc-800 border border-white/10 rounded-full text-zinc-200">Power Apps</span>
                  <span className="text-xs font-light px-3 py-1 bg-zinc-800 border border-white/10 rounded-full text-zinc-200">Power Automate</span>
                  <span className="text-xs font-light px-3 py-1 bg-zinc-800 border border-white/10 rounded-full text-zinc-200">SharePoint List</span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

            {/* Contact Section */}
      <motion.section 
        id="contact" 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="py-32 max-w-4xl mx-auto px-6 text-center relative"
      >
        <h2 className="text-4xl font-light mb-8 text-white">Let's <span className="font-semibold">Connect</span></h2>
        <p className="text-zinc-400 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
          I'm currently seeking opportunities in AI/ML, Data Engineering, and Data Science. 
          Feel free to reach out if you're looking for a dedicated engineer to join your team.
        </p>
        
        {/* Contact Links */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-8 text-lg font-light">
          {/* Email */}
          <a href="mailto:peerachetkhanitson@gmail.com" className="text-white hover:text-[#00b4d8] transition-colors border-b border-transparent hover:border-[#00b4d8] pb-1">
            peerachetkhanitson@gmail.com
          </a>
          
          <span className="hidden md:inline text-zinc-600">|</span>
          
          {/* Phone */}
          <span className="text-zinc-200">092-825-5299</span>
          
          <span className="hidden md:inline text-zinc-600">|</span>
          
          {/* GitHub */}
          <a href="https://github.com/peerachetkns" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00b4d8] transition-colors flex items-center gap-2 group">
            <svg className="w-5 h-5 text-zinc-400 group-hover:text-[#00b4d8] transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>

          <span className="hidden md:inline text-zinc-600">|</span>
          
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/peerachet-khanitson-073436404/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00b4d8] transition-colors flex items-center gap-2 group">
            <svg className="w-5 h-5 text-zinc-400 group-hover:text-[#00b4d8] transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
        
        <div className="mt-16 text-xs text-zinc-500 tracking-widest uppercase font-light">
           Based in Chonburi, Thailand
        </div>
      </motion.section>

    </div>
  );
}

export default App;