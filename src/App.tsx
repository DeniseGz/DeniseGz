import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Download,
  Code,
  Database,
  BarChart3,
  Brain,
  Calendar,
  ExternalLink,
  ChevronRight,
  Star
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">
              Denise Giménez
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Inicio' },
                { id: 'about', label: 'Perfil' },
                { id: 'skills', label: 'Habilidades' },
                { id: 'experience', label: 'Experiencia' },
                { id: 'projects', label: 'Proyectos' },
                { id: 'contact', label: 'Contacto' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  { id: 'hero', label: 'Inicio' },
                  { id: 'about', label: 'Perfil' },
                  { id: 'skills', label: 'Habilidades' },
                  { id: 'experience', label: 'Experiencia' },
                  { id: 'projects', label: 'Proyectos' },
                  { id: 'contact', label: 'Contacto' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="block">Denise</span>
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Giménez
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 mt-4 font-light">
                  Data Analyst • BI Analyst
                </p>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Profesional especializada en transformar datos en insights estratégicos. 
                Experiencia en SQL, Python y Power BI para optimización de procesos y 
                automatización de reportes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Contacto
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200 hover:scale-105 hover:shadow-md flex items-center justify-center gap-2">
                  <Download size={20} />
                  Descargar CV
                </button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-blue-600" />
                  CABA, Argentina
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-blue-600" />
                  1122426190
                </div>
                <a 
                  href="https://linkedin.com/in/denisegimenez" 
                  className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={16} className="text-blue-600" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-72 h-72 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white">
                    <BarChart3 size={120} />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Star size={20} className="text-yellow-800" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Database size={20} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Perfil Profesional
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              Profesional y estudiante de Ciencia de Datos e Inteligencia Artificial con habilidades 
              en análisis de datos, visualización y modelado predictivo. Experiencia en SQL, Python 
              y Power BI para transformar datos en insights estratégicos. Enfoque en la optimización 
              de procesos y automatización de reportes. Apasionada por el aprendizaje continuo y la 
              resolución de problemas mediante datos.
            </p>
            
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ciencia de Datos e IA</h3>
                <p className="text-gray-600">
                  Instituto de Formación Técnica Superior 11
                </p>
                <p className="text-sm text-blue-600 font-medium mt-2">
                  Marzo 2023 - Actualmente • Materias: 6/19
                </p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <Code className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Idiomas</h3>
                <p className="text-gray-600">
                  Español (Nativo)
                </p>
                <p className="text-sm text-green-600 font-medium mt-2">
                  Inglés B2
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Habilidades & Tecnologías
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Database,
                title: 'SQL',
                description: 'DDL, DML, consultas avanzadas, extracción y transformación de datos',
                level: 90,
                color: 'blue'
              },
              {
                icon: Code,
                title: 'Python',
                description: 'NumPy, Pandas, análisis y manipulación de datos',
                level: 85,
                color: 'green'
              },
              {
                icon: BarChart3,
                title: 'Power BI',
                description: 'Dashboards interactivos, DAX, visualización de datos',
                level: 95,
                color: 'yellow'
              },
              {
                icon: Brain,
                title: 'Machine Learning',
                description: 'Modelos predictivos, regresión, clustering, NLP',
                level: 80,
                color: 'purple'
              }
            ].map((skill, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-12 h-12 rounded-lg bg-${skill.color}-100 flex items-center justify-center mb-4`}>
                  <skill.icon className={`w-6 h-6 text-${skill.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{skill.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r from-${skill.color}-400 to-${skill.color}-600 h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 mt-2 block">{skill.level}%</span>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">Herramientas Adicionales</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Análisis & Visualización</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Looker Studio</li>
                  <li>• Tableau</li>
                  <li>• Excel Avanzado</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">APIs & Web Scraping</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Consumo de APIs</li>
                  <li>• Extracción de datos</li>
                  <li>• Automatización</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Office Suite</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Excel (Tablas dinámicas)</li>
                  <li>• PowerPoint</li>
                  <li>• Outlook</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Experiencia & Formación
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="ml-16 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-2">
                    <Calendar size={16} />
                    Julio 2025 - Actualmente
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Pasante de Análisis de datos, SAP e IA
                  </h3>
                  <p className="text-gray-600 font-medium mb-3">
                    ARTECH - Fundación Pescar
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Programa de formación intensiva para el empleo, enfocado en tecnologías y 
                    habilidades socioemocionales, con orientación a la inserción laboral en el sector IT.
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Formación Técnica (237 hs):</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="mb-2">
                          <span className="font-medium text-gray-800">Grupo SAP:</span>
                          <span className="text-gray-600 ml-2">SQL, ABA, Fiori, JavaScript y SAP BTP</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">Grupo Datos:</span>
                          <span className="text-gray-600 ml-2">SQL, Power BI, Python, Databricks y PowerApps</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Habilidades Interpersonales (180 hs):</h4>
                      <p className="text-gray-600">
                        Comunicación efectiva, trabajo en equipo, liderazgo, inteligencia emocional y empleabilidad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="ml-16 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-2 text-purple-600 text-sm font-medium mb-2">
                    <Calendar size={16} />
                    Marzo 2023 - Actualmente
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ciencia de Datos e Inteligencia Artificial
                  </h3>
                  <p className="text-gray-600 font-medium mb-3">
                    Instituto de Formación Técnica Superior 11
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Formación integral en Python, SQL, Análisis de Datos, Machine Learning, 
                    Big Data, PowerBI, Visualización de Datos y más.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-purple-900">Progreso Académico</span>
                      <span className="text-purple-600 font-bold">6/19 materias</span>
                    </div>
                    <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
                      <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full" style={{ width: '32%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Proyectos Destacados
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Optimización de Interacciones en Redes Sociales
                </h3>
                <div className="flex items-center gap-2 text-purple-100">
                  <Brain size={16} />
                  <span className="text-sm">Inteligencia Artificial, NLP</span>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Proyecto de optimización de interacciones en Reddit mediante IA y NLP. 
                  Implementación de modelos de NLP para análisis de sentimiento y generación 
                  de respuestas contextuales en foros.
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Características Principales:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Automatización y análisis de conversaciones en tiempo real</li>
                    <li>• Modelos de IA adaptativos para personalización de contenido</li>
                    <li>• Desarrollo en Python utilizando la API de Reddit</li>
                    <li>• Evaluación continua mediante pruebas A/B</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['Python', 'NLP', 'Machine Learning', 'Reddit API'].map((tech, index) => (
                    <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Análisis de Accidentes Viales en CABA
                </h3>
                <div className="flex items-center gap-2 text-green-100">
                  <BarChart3 size={16} />
                  <span className="text-sm">Power BI, Excel, DAX</span>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Desarrollo de un dashboard interactivo en Power BI para visualizar datos 
                  de siniestros viales en CABA. Importación y limpieza de datos públicos, 
                  segmentación por barrios y análisis temporal.
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Características Principales:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Segmentación por barrios, tipo de incidente y franja horaria</li>
                    <li>• Métricas con DAX para identificar zonas críticas</li>
                    <li>• Automatización del reporte mensual</li>
                    <li>• Claridad visual para toma de decisiones</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['Power BI', 'DAX', 'Excel', 'Power Query'].map((tech, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Contacto
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Trabajemos Juntos
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                ¿Tienes un proyecto interesante? Me encantaría conocer más sobre 
                cómo puedo ayudarte a transformar tus datos en insights valiosos.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:denisse.gmnz@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                      denisse.gmnz@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Teléfono</p>
                    <a href="tel:1122426190" className="text-green-600 hover:text-green-700 transition-colors">
                      +54 11 2242-6190
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/denisegimenez" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 transition-colors flex items-center gap-1"
                    >
                      linkedin.com/in/denisegimenez
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Ubicación</p>
                    <p className="text-yellow-600">CABA, Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Envíame un Mensaje</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Sobre qué quieres hablar"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Enviar Mensaje
                  <ChevronRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Denise Giménez</h3>
            <p className="text-gray-400 mb-6">Data Analyst • BI Analyst</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="mailto:denisse.gmnz@gmail.com"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/denisegimenez"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="tel:1122426190"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
              >
                <Phone size={20} />
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2025 Denise Giménez. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;