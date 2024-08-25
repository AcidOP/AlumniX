interface FAQ {
  question: string;
  answer: string;
}

const faqArray: FAQ[] = [
  {
    question: "How do I register as an alumnus?",
    answer:
      "You can easily register by clicking the 'Join Now' button on the homepage.",
  },
  {
    question: "Can I update my profile information after registering?",
    answer:
      "Yes, you can update your profile at any time.",
  },
  {
    question: "How can I make a donation to the college?",
    answer:
      "Donations can be made securely through our Donation Portal, accessible via the 'Donate' button.",
  },
  {
    question: "How do I post a job opportunity on the Job Portal?",
    answer:
      "Simply log in to your account, go to the Job Portal section, and click 'Post a Job' to fill out the necessary details.",
  },
  {
    question: "Is there a mobile app available for the alumni platform?",
    answer:
      "Yes, our alumni platform is accessible via a mobile app, available for download on both iOS and Android devices.",
  },
];

export default faqArray;
