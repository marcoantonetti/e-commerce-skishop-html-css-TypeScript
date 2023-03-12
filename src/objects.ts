// types of products

export type Binding = {
    brand: string,
    model: string,
    size: string[],
    type: string,
    price: number,
    id: number,
    image: string,

}

export type Snowboard = {
    brand: string,
    model: string,
    size: string[],
    terrain: string,
    personality: string,
    price: number,
    id: number,   
    image: string,

    
}

export type Helmet = {
        brand: string;
        model: string;
        size: string;
        terrain: string;
        personality: string;
        price: number;
        id: number,    
        image: string,

      }

export type Boot = {
    brand: string;
    model: string;
    size: number;
    price: number;
    id: number,
    image: string,


  }

export type Goggle = {
    brand: string;
    model: string;
    reflective: boolean;
    price: number;
    id: number,
    image: string,


  }

// list of products

export const BindingsList: Binding[] = [
    {
      brand: "Burton",
      model: "Custom Binding",
      size: ['L'],
      type: "Strap",
      price: 199,
      id: 1001,
      image: '/images/bindings/custom binding.jpg',    },
    {
      brand: "Burton",
      model: "Cartel Binding",
      size: ['L', 'M'],
      type: "Strap",
      price: 269,
      id: 1002,
      image: '/images/bindings/cartel binding.jpg'
    },
    {
      brand: "K2",
      model: "Vo3 Binding",
      size: ['L', 'M'],
      type: "Strap",
      price: 219,
      id: 1003,
      image: '/images/bindings/k2-vo3.jpg',
    },
    {
      brand: "K2",
      model: "Formula Binding",
      size: ['L'],
      type: "Strap",
      price: 169,
      id: 1004,
      image: '/images/bindings/k2-formula.jpg',
    },
    {
      brand: "Union",
      model: "Atlas Binding",
      size: ['L', 'M'],
      type: "Strap",
      price: 229,
      id: 1005,
      image: '/images/bindings/union-atlas.jpg',
    },
    {
      brand: "Union",
      model: "Strata Binding",
      size: ['L'],
      type: "Strap",
      price: 199,
      id: 1006,
      image: '/images/bindings/union-strata.jpg',
    },
    {
      brand: "Burton",
      model: "Step-On Binding",
      size: ['L', 'M'],
      type: "Step-In",
      price: 499,
      id: 1007,
      image: '/images/bindings/Burton-Step-On-Bindings.jpg',
    },
    {
      brand: "Burton Step-On ",
      model: "Hitchhiker Binding",
      size: ['L', 'M'],
      type: "Step-In",
      price: 449,
      id: 1008,
      image: '/images/bindings/hitchhiking-stepon.jpg',
    },
    {
      brand: "Ride",
      model: "Rodeo Binding",
      size: ['L'],
      type: "Strap",
      price: 219,
      id: 1009,
      image: '/images/bindings/ride-rodeo.jpg',
    },
    {
      brand: "Ride",
      model: "Capo Binding",
      size: ['L'],
      type: "Strap",    
      price:239,
      id: 1010,
      image: '/images/bindings/ride-capo.jpg',
    },
    {
      brand: "Rossignol",
      model: "Gala Binding",
      size: ['L', 'M'],
      type: "Strap",
      price: 209,
      id: 1011,
      image: '/images/bindings/rosi-gala.jpg',
    },
    {
      brand: "Rossignol",
      model: "Battle Binding",
      size: ['L', 'M'],
      type: "Strap",
      price: 189,
      id: 1012,
      image: '/images/bindings/rosi-battle.jpg',
    },
  ];
  
export const snowboardsList: Snowboard[] = [
    {
      brand: "Burton",
      model: "Custom X",
      size: ['L'],
      terrain: "All-Mountain",
      personality: "Versatile",
      price: 500,
      id: 2001,
      image:'/images/snowboards/burton-custom-x-snowboard.jpg',
    },
    {
      brand: "Jones",
      model: "Mountain Twin Snowboard",
      size: ['L', 'M'],
      terrain: "All-Mountain",
      personality: "Versatile",
      price: 600,
      id: 2002,
      image : '/images/snowboards/jones-mountain-twin-flip-flop.jpg',
    },
    {
      brand: "Gnu",
      model: "B-Nice Snowboard",
      size: ['L', 'M'],
      terrain: "All-Mountain",
      personality: "Versatile",
      price: 400,
      id: 2003,
      image : '/images/snowboards/GNU-B-Nice-Womens-Snowboard.jpg',
    },
    {
      brand: "Rosignol",
      model: "Sashimi",
      size: ['L'],
      terrain: "Powder",
      personality: "Aggressive",
      price: 600,
      id: 2004 ,
      image : '/images/snowboards/sashimi.jpg',
    },
    {
      brand: "Burton",
      model: "Process Snowboard",
      size: ['L'],
      terrain: "All-Mountain",
      personality: "Aggressive",
      price: 600,
      id: 2005 ,
      image : '/images/snowboards/burton process.jpg',
    },
    {
      brand: "Arbor",
      model: "Foundation Snowboard",
      size: ['L', 'M'],
      terrain: "All-Mountain",
      personality: "Versatile",
      price: 400,
      id: 2006,
      image : '/images/snowboards/arbor foundatinol.jpg',
    },
    {
      brand: "Capita",
      model: "Defenders of Awesome Snowboard",
      size: ['L', 'M'],
      terrain: "All-Mountain",
      personality: "Aggressive",
      price: 600,
      id: 2007 ,
      image : '/images/snowboards/capita Defenders of Awesome Snowboard.jpg',
    },
    {
      brand: "Rome",
      model: "Artifact",
      size: ['L', 'M'],
      terrain: "All-Mountain",
      personality: "Aggressive",
      price: 500,
      id: 2008,
      image : '/images/snowboards/rome-artifact.jpg',
    },
    {
      brand: "Never Summer",
      model: "Proto Snowboard",
      size: ['L'],
      terrain: "All-Mountain",
      personality: "Aggressive",
      price: 500,
      id: 2009,
      image : '/images/snowboards/never summer proto.jpg',
    },
    {
      brand: "Salomon",
      model: "QST Lumen Snowboard",
      size: ['L'],
      terrain: "All-Mountain",
      personality: "Versatile",
      price: 600,
      id: 2010,
      image : '/images/snowboards/SALOMON-Assassi.jpg',
    }
  ];
  
export const helmetsList: Helmet[] = [
        {
          brand: "Smith Optics",
          model: "Vantage MIPS",
          size: "M",
          terrain: "All-Mountain",
          personality: "Adventurous",
          price: 279,
          id: 3001,
          image : '/images/helmets/vatage mips.jpg',
        },
        {
          brand: "Smith Optics",
          model: "Holt",
          size: "L",
          terrain: "All-Mountain",
          personality: "Sporty",
          price: 79,
          id: 3002,
      image : '/images/helmets/holt smith.jpg',
        },
        {
          brand: "Giro",
          model: "Ledge MIPS",
          size: "S",
          terrain: "Park",
          personality: "Cool",
          price: 89,
          id: 3003,
          image : '/images/helmets/giro ledge.jpg',
        },
        {
          brand: "Giro",
          model: "Nine MIPS",
          size: "L",
          terrain: "All-Mountain",
          personality: "Stylish",
          price: 149,
          id: 3004,
          image : '/images/helmets/giro nine.jpg',
        },
        {
          brand: "Oakley",
          model: "Mod 5",
          size: "M",
          terrain: "All-Mountain",
          personality: "Innovative",
          price: 230,
          id: 3005,
          image : '/images/helmets/oakley mod 5.jpg',
        },
        {
          brand: "Oakley",
          model: "Mod 3",
          size: "L",
          terrain: "All-Mountain",
          personality: "Bold",
          price: 130,
          id: 3006,
          image : '/images/helmets/oakley mod 3.jpg',
        }
 
  ];
 
export const BootsList: Boot[] = [
    {
      brand: "Atomic",
      model: "Hawx Ultra",
      size: 7.5,
      price: 599,
      id: 4001,
      image : '/images/boots/atomic.jpg',
    },
    {
      brand: "Atomic",
      model: "Hawx Prime",
      size: 6.5,
      price: 399,
      id: 4002,
      image : '/images/boots/atomic791.jpg',
    },
    {
      brand: "Rossignol",
      model: "Excite Lace",
      size: 8.0,
      price: 699,
      id: 4003,
      image : '/images/boots/rossignol-excite-lace-snowboard-boots.jpg',
    },
    {
      brand: "Salomon",
      model: "Dialogue 2023",
      size: 7.5,
      price: 299,
      id: 4004,
      image : '/images/boots/salomon-dialogue.jpg',
    },

    {
      brand: "Salomon",
      model: "Faction Boa",
      size: 7.0,
      price: 699,
      id: 4007,
      image : '/images/boots/salomon-dialogue.jpg',
    },
    {
      brand: "DC",
      model: "Lace Pro",
      size: 8.5,
      price: 599,
      id: 4008,
      image : '/images/boots/dc shows.jpg',
    },
    {
      brand: "DC",
      model: "Control Boa",
      size: 11,
      price: 699,
      id: 4009,
      image : '/images/boots/dc-control boa.jpg',
    },
    {
      brand: "Ride",
      model: "Rook",
      size: 10,
      price: 249,
      id: 4010,
      image : '/images/boots/dc-control boa.jpg',
    },
    {
      brand: "Burton",
      model: "Photon step-on",
      size: 7.5,
      price: 599,
      id: 4011,
      image : '/images/boots/burton-photon-step-on.jpg',
    },
  ];
  
export const GogglesList: Goggle[] = [
    {
      brand: "Oakley",
      model: "Flight Deck",
      reflective: true,
      price: 200,
      id: 5001,
      image : '/images/goggles/flight deck.jpg',
    },
    {
      brand: "Smith",
      model: "I/O Mag",
      reflective: true,
      price: 240,
      id: 5002,
      image : '/images/goggles/smith.jpg',
    },
    {
      brand: "Giro",
      model: "Contact",
      reflective: false,
      price: 150,
      id: 5003,
      image : '/images/goggles/giro-contact.jpg',
    }
  ];




  
  
  