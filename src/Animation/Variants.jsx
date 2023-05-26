export const pageVariant = {
  initial: {
    x: "-300px",
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    x: "-300px",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const footerVariants = {
  exit: {
    y: "100px",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};
export const confirmVariant = {
  initial: {
    backgroundColor: "hsl(213, 96%, 18%)",
    transition: {
      duration: 0.5,
    },
  },
  final: {
    backgroundColor: "hsl(243, 100%, 62%)",
    transition: {
      duration: 0.5,
    },
  },
};

export const exitButton ={
    initial : {
      opacity : 1,
    },
    exit :{
      opacity : 0,
      y : "20px",
      transition: {
        duration: 1,
      },
    }
  }

 export const btnVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    final: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.75,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.25,
      },
    },
  };