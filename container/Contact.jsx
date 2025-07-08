"use client";

import electron from '@/public/lottie/electron.json';
import { Snackbar, Alert } from '@mui/material';
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { SendTimeExtension } from '@mui/icons-material';
import Lottie from 'lottie-react';
import { EarthCanvas, EarthWrapper, StarsCanvas } from '../components/canvas';
import { motion } from 'framer-motion';
import { Section, Container } from '../components/layout';
import { Input, Textarea} from "../components/forms"
import {Button} from '../components/ui'
import { FloatingParticles } from '../components/animations';
import { useIntersectionObserver } from '../lib/hooks';
import { useTranslation } from 'react-i18next';
import { Badge } from '../components/ui';

export default function Contact() {
    const { t } = useTranslation('common');
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
            background="dark"
            padding="py-24"
            container={false}
            ref={ref}
        >
            <Container maxWidth="max-w-3xl">
                <div className="flex flex-col items-center mb-12">
                    <Badge 
                        variant="primary" 
                        size="lg"
                        className="mb-4 px-8 py-2 bg-gradient-to-r from-sky-400 to-cyan-500 text-white font-mono text-lg rounded-md shadow-lg border-b-4 border-sky-400 neon-text"
                    >
                        {t('contact.title')}
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl font-bold text-sky-100 neon-text mb-2 text-center">
                        {t('contact.subtitle')}
                    </h2>
                </div>

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
                        
                        <EarthWrapper />
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
                                label={t('contact.form.name')}
                                name="from_name"
                                type="text"
                                placeholder={t('contact.form.placeholder_name')}
                                value={formData.from_name}
                                onChange={handleChange}
                                required
                            />

                            {/* Champ Email */}
                            <Input
                                label={t('contact.form.email')}
                                name="from_email"
                                type="email"
                                placeholder={t('contact.form.placeholder_email')}
                                value={formData.from_email}
                                onChange={handleChange}
                                required
                            />

                            {/* Champ Message */}
                            <Textarea
                                label={t('contact.form.message')}
                                name="message"
                                placeholder={t('contact.form.placeholder_message')}
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
                                    {loading ? t('contact.form.send') + '...' : t('contact.form.send')}
                                </Button>
                            </motion.div>
                        </form>
                        
                        {/* Feedback message */}
                        {feedbackMessage && (
                            <Snackbar open autoHideDuration={6000} onClose={() => setFeedbackMessage('')}>
                                <Alert onClose={() => setFeedbackMessage('')} severity={error ? 'error' : 'success'} sx={{ width: '100%' }}>
                                    {error ? t('contact.error') : t('contact.success')}
                                </Alert>
                            </Snackbar>
                        )}
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}