"use client";
import ThemeSwitch from './components/ThemeSwitch';
import { useState, useEffect } from 'react';

export default function StyleGuide() {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="flex flex-col gap-16 min-h-screen p-12 bg-background text-foreground">
      <ThemeSwitch setTheme={setTheme} theme={theme} />
      
      {/* Typography */}
      <section>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>This is a paragraph with normal text.</p>
        <p className="font-mono">This is a paragraph with monospace font.</p>
        <ul className="list-disc ml-6">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </section>
      
      {/* Buttons */}
      <section className="flex flex-wrap gap-4">
        <button className="btn btn-primary">Primary Button</button>
        <button className="btn btn-secondary">Secondary Button</button>
        <button className="btn btn-accent">Accent Button</button>
        <button className="btn btn-error">Error Button</button>
        <button className="btn btn-success">Success Button</button>
        <button className="btn btn-outline">Outline Button</button>
        <button className="btn btn-outline border-secondary text-secondary">Modified Outline</button>
        <button className="btn btn-ghost">Ghost Button</button>
        <button className="btn btn-disabled" disabled>Disabled Button</button>
      </section>
      
      {/* Cards & Dividers */}
      <section className="space-y-8 bg-black">
        <h3>Card Variants</h3>

        {/* Profile Card */}
        <div className="card w-96">
          <img src="/images/profile.png" alt="Profile" className="w-full h-48 object-cover rounded-t-2xl" />
          <div className="p-6">
            <h4 className="text-2xl font-bold">John Doe</h4>
            <p className="text-gray-600 dark:text-gray-400">UI/UX Designer</p>
            <div className="mt-4 flex items-center gap-4">
              <button className="btn btn-primary">Hire Me</button>
              <button className="btn btn-outline">View Portfolio</button>
            </div>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="card w-96">
          <div className="p-6">
            <p className="text-gray-600 dark:text-gray-400 italic">This is an amazing service! I highly recommend it.&quot;</p>
            <div className="mt-4 flex items-center gap-4">
              <img src="/images/avatar.jpg" alt="User Avatar" className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="text-lg font-bold">Jane Smith</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">CEO, Company</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Card */}
        <div className="card hover:shadow-xl transition-shadow w-80">
          <img src="/images/project.jpg" alt="Project" className="w-full h-48 object-cover rounded-t-2xl" />
          <div className="p-6">
            <h4 className="text-2xl font-bold">Project Title</h4>
            <p className="text-gray-600 dark:text-gray-400">Project description goes here.</p>
            <button className="btn btn-primary mt-4">View Project</button>
          </div>
        </div>

        <div className="divider-horizontal"></div>
      </section>
      
      {/* Forms */}
      <form className="form-container">
        <h3>Sign Up Form</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className="input" />
          <input type="text" placeholder="Last Name" className="input" />
        </div>
        <input type="email" placeholder="Email Address" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <textarea placeholder="Tell us about yourself" className="textarea"></textarea>
        <select className="select">
          <option>Choose a role</option>
          <option>Developer</option>
          <option>Designer</option>
          <option>Product Manager</option>
        </select>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="terms" className="w-5 h-5" />
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>
        <button className="btn btn-primary w-full">Sign Up</button>
      </form>

      {/* Modals */}
      <section>
        <h3>Modals</h3>
        <div className="card">
          <p>This is a modal placeholder. Add your modal content here.</p>
        </div>
      </section>

      {/* Popovers */}
      <section>
        <h3>Popovers</h3>
        <div className="card">
          <p>This is a popover placeholder. Add your popover content here.</p>
        </div>
      </section>

      {/* Tooltips */}
      <section>
        <h3>Tooltips</h3>
        <div className="card">
          <p>This is a tooltip placeholder. Add your tooltip content here.</p>
        </div>
      </section>

      {/* Tabs */}
      <section>
        <h3>Tabs</h3>
        <div className="card">
          <p>This is a tabs placeholder. Add your tabs content here.</p>
        </div>
      </section>

      {/* Accordion */}
      <section>
        <h3>Accordion</h3>
        <div className="card">
          <p>This is an accordion placeholder. Add your accordion content here.</p>
        </div>
      </section>

      {/* Badges */}
      <section>
        <h3>Badges</h3>
        <div className="flex gap-2">
          <span className="badge badge-primary">Primary</span>
          <span className="badge badge-secondary">Secondary</span>
          <span className="badge badge-accent">Accent</span>
          <span className="badge badge-error">Error</span>
          <span className="badge badge-success">Success</span>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section>
        <h3>Breadcrumbs</h3>
        <div className="breadcrumbs">
          <a href="#">Home</a>
          <span>/</span>
          <a href="#">Settings</a>
          <span>/</span>
          <a href="#">Profile</a>
        </div>
      </section>

      {/* Progress Bars */}
      <section>
        <h3>Progress Bars</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-primary h-2.5 rounded-full" style={{ width: '45%' }}></div>
        </div>
      </section>

      {/* Social Media Links */}
      <section>
        <h3>Social Media Links</h3>
        <div className="flex gap-4">
          <a href="#" className="text-primary hover:opacity-80">Twitter</a>
          <a href="#" className="text-primary hover:opacity-80">LinkedIn</a>
          <a href="#" className="text-primary hover:opacity-80">GitHub</a>
        </div>
      </section>

      {/* Client Logos Slider */}
      <section>
        <h3>Client Logos Slider</h3>
        <div className="flex gap-4 overflow-x-auto">
          <img src="/images/client1.png" alt="Client 1" className="h-12" />
          <img src="/images/client2.png" alt="Client 2" className="h-12" />
          <img src="/images/client3.png" alt="Client 3" className="h-12" />
        </div>
      </section>

      {/* Pricing Table */}
      <section>
        <h3>Pricing Table</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="card">
            <h4>Basic</h4>
            <p>$10/month</p>
            <button className="btn btn-primary mt-4">Get Started</button>
          </div>
          <div className="card">
            <h4>Pro</h4>
            <p>$20/month</p>
            <button className="btn btn-primary mt-4">Get Started</button>
          </div>
          <div className="card">
            <h4>Enterprise</h4>
            <p>$50/month</p>
            <button className="btn btn-primary mt-4">Get Started</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h3>FAQ Section</h3>
        <div className="card">
          <p>This is an FAQ placeholder. Add your FAQ content here.</p>
        </div>
      </section>

      {/* Contact Info Card */}
      <section>
        <h3>Contact Info Card</h3>
        <div className="card">
          <p>Email: example@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </section>
    </div>
  );
}