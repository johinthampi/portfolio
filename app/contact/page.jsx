"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { contact } from '@/data/contact';
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
  const [state, handleSubmit] = useForm("mqaagggj");
  if (state.succeeded) {
      return <p className='font-bold text-center border-2 border-solid border-white p-4'>Thank you for reaching out to me</p>;
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='py-6'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='xl:w-[54%] order-2 xl:order-none'
          >
            <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-10 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl'>
              <motion.h3 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-4xl text-accent'
              >
                Contact Me
              </motion.h3>
              <motion.h3 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className='text-2xl text-white'
              >
                Let's get in touch
              </motion.h3>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='grid grid-cols-1 md:grid-cols-2 gap-6'
              >
                <Input type='firstname' placeholder='Firstname' name="firstname" />
                <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
                <Input type='lastname' placeholder='Lastname' name='lastname'/>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className='grid grid-cols-1 gap-6'
              >
                <Input type='email' placeholder='Email' name="email" />
                <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Textarea className='h-[200px]' placeholder='Message' id="message"
                  name="message" />
                <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
<Button 
  size="md" 
  className={`max-w-40 ${state.submitting ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-white'}`} 
  type="submit" 
  disabled={state.submitting}
>
  {state.submitting ? 'Submitting...' : 'Submit'}
</Button>              </motion.div>
            </form>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'
          >
            <ul className='flex flex-col gap-10'>
              {contact.map((item, index) => {
                return (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-6 cursor-pointer" 
                    onClick={item.action}
                  >
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-accent rounded-md flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-xl'>{item.description}</h3>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;