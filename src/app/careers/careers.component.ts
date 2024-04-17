import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  title = 'Careers';

  showPopUp = false;
  popUpText1 = "Thank you for your application.";
  popUpText2 = "You'll be contacted shortly.";

  positions = [
    {
      icon: 'assets/front-end.svg',
      title: 'Front-End Developer',
      skills: [
        'Proficiency in HTML, CSS, and JavaScript',
        'Experience with front-end frameworks such as Angular, React, or Vue.js',
        'Knowledge of responsive design principles',
        'Understanding of UI/UX best practices',
        'Familiarity with version control systems (e.g., Git)',
        'Strong problem-solving skills and attention to detail'
      ]
    },
    {
      icon: 'assets/back-end.svg',
      title: 'Back-End Developer',
      skills: [
        'Proficiency in server-side programming languages such as Python, Java, or Node.js',
        'Experience with database management systems (e.g., SQL, NoSQL)',
        'Knowledge of RESTful API design and implementation',
        'Familiarity with cloud platforms such as AWS, Azure, or Google Cloud',
        'Understanding of security best practices for web applications',
        'Ability to optimize application performance and scalability'
      ]
    },
    {
      icon: 'assets/full-stack.svg',
      title: 'Full Stack Developer',
      skills: [
        'Proficiency in both front-end and back-end technologies (HTML, CSS, JavaScript, server-side programming languages)',
        'Experience with full stack frameworks such as MEAN, MERN, or LAMP',
        'Strong problem-solving skills and ability to troubleshoot across the entire stack',
        'Knowledge of software architecture and design patterns',
        'Ability to work independently and collaboratively in a team environment',
        'Excellent communication and time-management skills'
      ]
    },
    {
      icon: 'assets/machine-learning.svg',
      title: 'Machine Learning Engineer',
      skills: [
        'Proficiency in programming languages such as Python or Rust',
        'Experience with machine learning libraries and frameworks (e.g., TensorFlow, PyTorch, scikit-learn)',
        'Knowledge of statistical analysis and data visualization techniques',
        'Understanding of supervised and unsupervised learning algorithms',
        'Familiarity with deep learning architectures and neural networks',
        'Strong mathematical background, including linear algebra and calculus'
      ]
    },
    {
      icon: 'assets/ui-ux.svg',
      title: 'UI/UX Designer',
      skills: [
        'Proficiency in design tools such as Adobe XD, Sketch, or Figma',
        'Experience with user research methods, including interviews and usability testing',
        'Understanding of design principles and aesthetics',
        'Ability to create wireframes, prototypes, and mockups',
        'Knowledge of front-end development technologies and constraints',
        'Strong portfolio showcasing past design projects and problem-solving skills'
      ]
    },
    {
      icon: 'assets/team.svg',
      title: 'Team as a Service Member',
      skills: [
        'Relevant experience in software development, design, or project management',
        'Ability to adapt to different project requirements and team dynamics',
        'Strong communication and collaboration skills',
        'Proficiency in relevant technologies and tools based on project needs',
        'Commitment to quality, deadlines, and continuous improvement',
        'Willingness to learn and grow within a dynamic and fast-paced environment'
      ]
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
      form.controls['resume'].markAsTouched();
    }
  }
}
