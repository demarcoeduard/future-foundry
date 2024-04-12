import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  title = 'FAQ';

  faqs = [
    {
      question: "What is Future Foundry?",
      answer:"Future Foundry is an open-source platform that connects industries with top-tier software professionals and solutions. We help businesses find the right talent to tackle their software challenges and drive innovation."
    },
    {
      question: "How does Future Foundry work?",
      answer:"Future Foundry operates as a dynamic marketplace where businesses can post their software needs. Our platform then matches businesses with the most suitable experts based on their requirements, facilitating seamless collaboration and project execution."
    },
    {
      question: "What types of services does Future Foundry offer?",
      answer: "Future Foundry offers a variety of services, including front-end development, back-end development, full-stack development, machine learning solutions, UI/UX design, and 'Team as a Service' options. We cover a comprehensive range of software needs to support businesses at every stage of their digital journey."
    },
    {
      question: "Can startups also benefit from your services?",
      answer: "Future Foundry caters to businesses of all sizes, from startups to large enterprises. Whether you're a small startup looking to build your tech team or a multinational corporation seeking specialized expertise, we provide flexible solutions to meet your needs and budget."
    },
    {
      question: "What sets Future Foundry apart from other outsourcing platforms?",
      answer: "What sets Future Foundry apart is our commitment to quality, transparency, and innovation. We prioritize matching businesses with the right talent, ensuring a seamless and successful collaboration. Additionally, our open-source platform fosters a community-driven approach to problem-solving, leading to more creative and effective solutions for our clients."
    },
    {
      question: "How does Future Foundry assess the skills and qualifications of its talent pool?",
      answer: "Future Foundry carefully vets all professionals on our platform to ensure they meet our rigorous standards for skill, experience, and professionalism. We also provide tools and resources for clients to assess candidates' qualifications and portfolios before making hiring decisions."
    },
    {
      question: "Can I hire a dedicated team through Future Foundry for long-term projects?",
      answer: "Yes, absolutely! Future Foundry offers 'Team as a Service' options for clients who need dedicated teams to support their long-term projects. Our flexible staffing solutions allow you to scale your team up or down as needed, providing you with the expertise and resources to achieve your goals."
    },
    {
      question: "How can I get started with Future Foundry?",
      answer: "Getting started with Future Foundry is easy. Simply head to the services section to explore our options . If you have specific questions or need assistance, feel free to reach out to our support team, and we'll be happy to help you get started on your journey with Future Foundry."
    }
  ]
}
