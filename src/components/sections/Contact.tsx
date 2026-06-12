'use client';

import { Input, Label, Submit, Textarea } from "./elements/contact";
import { Section, Strong, Title } from "./elements";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const Contact = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation("global");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}`
        );
        
        window.location.href = `mailto:abdelhamid@noira.net?subject=${subject}&body=${body}`;
        
        // Clear the form after opening email client
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }, 100);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Section
            id="contact"
            aria-labelledby="contact-title"
            className="gap-12"
            {...props}
        >
            <header>
                <Title id="contact-title">
                    {t('pages.main.sections.contact.title')} <Strong>{t('pages.main.sections.contact.strong')}</Strong>
                </Title>
            </header>
            <form onSubmit={handleSubmit}>
                <fieldset className="flex flex-col gap-6 inlg:gap-3">
                    <legend className="sr-only">
                        {t('pages.main.sections.contact.form.legend')}
                    </legend>
                    <div>
                        <Label htmlFor="name">{t('pages.main.sections.contact.form.name.label')}</Label>
                        <Input 
                            id="name" 
                            name="name" 
                            placeholder={t('pages.main.sections.contact.form.name.placeholder')} 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div>
                        <Label htmlFor="email">{t('pages.main.sections.contact.form.email.label')}</Label>
                        <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder={t('pages.main.sections.contact.form.email.placeholder')} 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div>
                        <Label htmlFor="message">{t('pages.main.sections.contact.form.message.label')}</Label>
                        <Textarea 
                            id="message" 
                            name="message" 
                            rows={4} 
                            placeholder={t('pages.main.sections.contact.form.message.placeholder')} 
                            value={formData.message}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <Submit>{t('pages.main.sections.contact.form.button.text')}</Submit>
                </fieldset>
            </form>
        </Section>
    )

}