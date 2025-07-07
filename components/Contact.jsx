"use client";

import electron from '@/public/lottie/electron.json';
import { Snackbar, Alert } from '@mui/material';
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { SendTimeExtension } from '@mui/icons-material';
import Lottie from 'lottie-react';
import { EarthCanvas, StarsCanvas } from './canvas';
import { motion } from 'framer-motion';
import { Section, Container } from './layout';
import { Input, Textarea} from "./forms"
import {Button} from './ui'
import { FloatingParticles } from './animations';
import { useIntersectionObserver } from '../lib/hooks';

export default function Contact() {
    const service_id = 'service_5jqqipm';
    const template_id = 'template_jtdi41t';
    const user_id = 'kHkqy5hA04JrfIAK-';
    
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: '',
        to_name: 'sandjonyves'
    });
    
    const [loading, setLoading] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [error, setError] = useState(false);
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.3 });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setFeedbackMessage('');
        setError(false);
        
        console.log(formData);
        
        try {
            const response = await emailjs.send(service_id, template_id, formData, user_id);

            if (response.status === 200) {
                setFeedbackMessage('Email envoyé avec succès !');
                // Reset form
                setFormData({
                    from_name: '',
                    from_email: '',
                    message: '',
                    to_name: 'sandjonyves'
                });
            } else {
                throw new Error('Failed to send email.');
            }
        } catch (error) {
            console.log('Error sending email:', error);
            setFeedbackMessage('Échec de l\'envoi de l\'email. Veuillez réessayer.');
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    // Variantes d'animation pour la Terre (vient de la gauche)
    const earthVariants = {
        hidden: { 
            x: -300, 
            opacity: 0,
            scale: 0.8,
            rotate: -180
        },
        visible: { 
            x: 0, 
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { 
                duration: 1.2,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
            }
        }
    };

    // Variantes d'animation pour le formulaire (vient de la droite)
    const formVariants = {
        hidden: { 
            x: 300, 
            opacity: 0,
            scale: 0.8
        },
        visible: { 
            x: 0, 
            opacity: 1,
            scale: 1,
            transition: { 
                duration: 1.2,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                delay: 0.3
            }
        }
    };

    return (
        <Section 
            id="contact" 
            background="default"
            padding="py-20"
            container={false}
            ref={ref}
        >
            <Container maxWidth="max-w-5xl">
                {/* Titre animé */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ y: -50, opacity: 0 }}
                    animate={isIntersecting ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">
                        Contactez-moi
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Animation Earth Canvas - Vient de la gauche */}
                    <motion.div
                        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative'
                        variants={earthVariants}
                        initial="hidden"
                        animate={isIntersecting ? "visible" : "hidden"}
                    >
                        {/* Effet de glow autour de la Terre */}
                        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-cyan-400/20 rounded-full blur-xl opacity-70"></div>
                        
                        {/* Particules flottantes autour de la Terre */}
                        <FloatingParticles 
                            count={8}
                            color="bg-sky-400"
                            size="w-2 h-2"
                            duration={3}
                            delay={1.5}
                        />
                        
                        <EarthCanvas />
                    </motion.div>
                                    
                    {/* Formulaire de contact - Vient de la droite */}
                    <motion.div 
                        className="w-full flex flex-col gap-2"
                        variants={formVariants}
                        initial="hidden"
                        animate={isIntersecting ? "visible" : "hidden"}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Champ Nom */}
                            <Input
                                label="Nom"
                                name="from_name"
                                type="text"
                                placeholder="Votre nom"
                                value={formData.from_name}
                                onChange={handleChange}
                                required
                            />

                            {/* Champ Email */}
                            <Input
                                label="Votre email"
                                name="from_email"
                                type="email"
                                placeholder="sandjonyves@gmail.com"
                                value={formData.from_email}
                                onChange={handleChange}
                                required
                            />

                            {/* Champ Message */}
                            <Textarea
                                label="Votre message"
                                name="message"
                                placeholder="Laissez un commentaire..."
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                required
                            />

                            {/* Bouton d'envoi */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    icon={<SendTimeExtension />}
                                    className="w-full"
                                >
                                    {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                                </Button>
                            </motion.div>
                        </form>
                        
                        <Snackbar 
                            open={!!feedbackMessage} 
                            autoHideDuration={6000} 
                            onClose={() => setFeedbackMessage('')}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        >
                            <Alert 
                                onClose={() => setFeedbackMessage('')} 
                                severity={error ? 'error' : 'success'}
                                sx={{ 
                                    backgroundColor: error ? '#ef4444' : '#10b981',
                                    color: 'white',
                                    '& .MuiAlert-icon': {
                                        color: 'white'
                                    }
                                }}
                            >
                                {feedbackMessage}
                            </Alert>
                        </Snackbar>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}