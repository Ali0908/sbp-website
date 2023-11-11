import {Component} from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
   openAnswer: boolean = true;
  faqItems =  [
    { question: "Pourquoi devrais-je envisager un ravalement de ma façade ?", answer: "Le ravalement permet de rénover et de protéger votre façade contre les intempéries, d'améliorer l'esthétique de votre maison et d'augmenter sa valeur. Il peut également contribuer à améliorer l'efficacité énergétique en réparant les fissures et en isolant la façade.", openAnswer: true },
    { question: "Quels sont les avantages de faire un ravalement de ma maison du point de vue de l'efficacité énergétique ?", answer: "Le ravalement peut améliorer l'efficacité énergétique en réparant les fissures, en améliorant l'isolation extérieure et en réduisant les ponts thermiques, ce qui contribue à réduire la consommation d'énergie pour le chauffage ou la climatisation.", openAnswer: true  },
    { question: "Quels matériaux de ravalement sont les plus durables et éco-responsables ?", answer: "Les matériaux durables et éco-responsables pour le ravalement incluent la peinture minérale, le bardage en bois ou en matériaux recyclés, qui ont une empreinte carbone plus faible et nécessitent moins d'entretien à long terme.", openAnswer: true  },
    { question: "Quelle est la différence entre une VMC simple flux et une VMC double flux ", answer: "Une VMC simple flux évacue l'air vicié et introduit de l'air frais, tandis qu'une VMC double flux récupère la chaleur de l'air sortant pour préchauffer l'air entrant, ce qui la rend plus efficace sur le plan énergétique", openAnswer: true  },
    { question: "Comment choisir la VMC la plus adaptée à ma maison ? ", answer: "Le choix dépend de la taille de votre maison, de son isolation, de la région où vous habitez, et de vos besoins en termes de qualité de l'air intérieur. Une évaluation professionnelle peut vous aider à prendre la décision appropriée", openAnswer: true  },
    { question: "Comment puis-je rendre mon système électrique plus économe en énergie ? ", answer: "Vous pouvez améliorer l'efficacité énergétique de votre système électrique en installant des éclairages LED, en utilisant des appareils à faible consommation d'énergie, et en planifiant une distribution électrique optimale.", openAnswer: true  },
    { question: "Quels sont les avantages de l'installation de panneaux solaires sur mon toit ? ", answer: "L'installation de panneaux solaires peut réduire votre dépendance à l'électricité provenant de sources non renouvelables, vous permettant ainsi d'économiser sur vos factures d'énergie et de contribuer à la réduction des émissions de carbone.", openAnswer: true  },
    { question: "Quels sont les matériaux d'isolation les plus efficaces pour ma maison ? ", answer: "Les matériaux d'isolation efficaces incluent la laine de roche, la laine de verre, la mousse isolante et les panneaux isolants en polystyrène. Le choix dépendra de la zone à isoler et de vos besoins spécifiques.", openAnswer: true  },
    { question: "Comment puis-je améliorer l'isolation de mes fenêtres ? ", answer: "Vous pouvez améliorer l'isolation de vos fenêtres en utilisant des vitrages à haute performance, en ajoutant des joints d'étanchéité et en envisageant éventuellement le remplacement des fenêtres si elles sont anciennes et inefficaces.", openAnswer: true  },
  ];

  toggleAnswer(index: number) {
    this.faqItems[index].openAnswer = !this.faqItems[index].openAnswer;
  }
}
