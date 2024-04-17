import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  title = 'Services';

  showPopUp = false;
  popUpText1 = "Thank you for choosing Future Foundry.";
  popUpText2 = "You'll be contacted shortly.";

  services = [
    {
      class1: "service",
      class2: "serviceWrapper",
      image: "assets/service1.png",
      alt: "front-end image",
      title: "Front-End",
      text1: "Our front-end development team specializes in crafting captivating user interfaces that not only look stunning but also offer seamless navigation and functionality. We understand the importance of creating a visually appealing and intuitive experience for your users.",
      text2: "From responsive design that adapts flawlessly to various devices to interactive elements that engage and delight, we're here to bring your digital vision to life."
    },
    {
      class1: "service alt-bg",
      class2: "serviceWrapper reverse",
      image: "assets/service2.png",
      alt: "back-end image",
      title: "Back-End",
      text1: "In today's digital landscape, a robust back-end infrastructure is crucial for ensuring the seamless functionality and performance of your applications and systems. Our back-end development team specializes in building scalable, secure, and efficient solutions that power your business operations.",
      text2: "From database management to server-side scripting and API integrations, we handle the technical complexities behind the scenes, allowing you to focus on your core business objectives."
    },
    {
      class1: "service",
      class2: "serviceWrapper",
      image: "assets/service3.jpg",
      alt: "full stack image",
      title: "Full Stack",
      text1: "Our full stack developers are versatile experts capable of handling both front-end and back-end development tasks, providing you with solutions from start to finish. With proficiency in a wide range of programming languages, frameworks, and technologies, we offer end-to-end services tailored to your specific project requirements.",
      text2: "From conceptualization and design to implementation and deployment, we ensure that every aspect of your digital product is meticulously crafted and seamlessly integrated."
    },
    {
      class1: "service alt-bg",
      class2: "serviceWrapper reverse",
      image: "assets/service4.avif",
      alt: "machine learning image",
      title: "Machine Learning",
      text1: "Unlock the full potential of your data with our machine learning solutions. Our team of AI experts specializes in harnessing advanced algorithms and predictive analytics to extract valuable insights, automate processes, and drive innovation in your business.",
      text2: "From data preprocessing and model training to deployment and optimization, we guide you through every step of the machine learning journey, empowering you to stay ahead of the competition in today's data-driven world."
    },
    {
      class1: "service",
      class2: "serviceWrapper",
      image: "assets/service5.png",
      alt: "ui/ux image",
      title: "UI/UX",
      text1: "Our UI/UX design team combines creativity and usability to deliver visually stunning and intuitive interfaces that captivate users and elevate your brand. We start by gaining a deep understanding of your target audience, allowing us to design solutions that resonate with your users on a profound level.",
      text2: "Whether you're launching a new website, mobile app, or enterprise software, we're here to transform your vision into a memorable and meaningful user experience."
    },
    {
      class1: "service alt-bg",
      class2: "serviceWrapper reverse",
      image: "assets/service6.jpg",
      alt: "team as a service image",
      title: "Team as a service",
      text1: "Finding and assembling a skilled tech team can be a daunting task. That's where our 'Team as a Service' model comes in. We offer you flexible access to a dedicated team of experienced professionals who seamlessly integrate with your existing workflows, providing you with the expertise and resources you need to bring your projects to life.",
      text2: "With our 'Team as a Service' model, you can scale your resources up or down as needed, ensuring timely delivery and project success without the hassle of recruitment or overhead costs."
    }
  ];

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.showPopUp = true;
      
      setTimeout(() => {
        this.showPopUp = false;
        form.reset();
      }, 3000);
    } else {
      form.controls['name'].markAsTouched();
      form.controls['email'].markAsTouched();
    }
  }
}
