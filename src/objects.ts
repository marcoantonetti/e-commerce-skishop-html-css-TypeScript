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

    
}

export type Helmet = {
        brand: string;
        model: string;
        size: string;
        terrain: string;
        personality: string;
        price: number;
        id: number,

      }

export type Boot = {
    brand: string;
    model: string;
    size: number;
    price: number;
    id: number,

  }

export type Goggle = {
    brand: string;
    model: string;
    reflective: boolean;
    price: number;
    id: number,


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
      model: "Custom Snowboard",
      size: ['L'],
      terrain: "All-Mountain",
      personality: "Versatile",
      price: 500,
      id: 2001
    },
    {
      brand: "Jones",
      model: "Mountain Twin Snowboard",
      size: ['L', 'M'],
      terrain: "All-Mountain",
      personality: "Versatile",
      price: 600,
      id: 2002
    },
    {
      brand: "Gnu",
      model: "B-Nice Snowboard",
      size: ['L', 'M'],
      terrain: "All-Mountain",
      personality: "Versatile",
      price: 400,
      id: 2003
    },
    {
      brand: "K2",
      model: "Remedy Snowboard",
      size: ['L'],
      terrain: "All-Mountain",
      personality: "Aggressive",
      price: 600,
      id: 2004 
    },
    {
      brand: "Burton",
      model: "Process Snowboard",
      size: ['L'],
      terrain: "All-Mountain",
      personality: "Aggressive",
      price: 600,
      id: 2005 
    },
    {
      brand: "Arbor",
      model: "Foundation Snowboard",
      size: ['L', 'M'],
      terrain: "All-Mountain",
      personality: "Versatile",
      price: 400,
      id: 2006
    },
    {
      brand: "Capita",
      model: "Defenders of Awesome Snowboard",
      size: ['L', 'M'],
      terrain: "All-Mountain",
      personality: "Aggressive",
      price: 600,
      id: 2007 
    },
    {
      brand: "Ride",
      model: "Warpig Snowboard",
      size: ['L', 'M'],
      terrain: "All-Mountain",
      personality: "Aggressive",
      price: 500,
      id: 2008
    },
    {
      brand: "Never Summer",
      model: "Proto Snowboard",
      size: ['L'],
      terrain: "All-Mountain",
      personality: "Aggressive",
      price: 500,
      id: 2009
    },
    {
      brand: "Salomon",
      model: "QST Lumen Snowboard",
      size: ['L'],
      terrain: "All-Mountain",
      personality: "Versatile",
      price: 600,
      id: 2010
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
          id: 3001
        },
        {
          brand: "Smith Optics",
          model: "Holt",
          size: "L",
          terrain: "All-Mountain",
          personality: "Sporty",
          price: 79,
          id: 3002
        },
        {
          brand: "Giro",
          model: "Ledge MIPS",
          size: "S",
          terrain: "Park",
          personality: "Cool",
          price: 89,
          id: 3003
        },
        {
          brand: "Giro",
          model: "Nine MIPS",
          size: "L",
          terrain: "All-Mountain",
          personality: "Stylish",
          price: 149,
          id: 3004
        },
        {
          brand: "Oakley",
          model: "Mod 5",
          size: "M",
          terrain: "All-Mountain",
          personality: "Innovative",
          price: 230,
          id: 3005
        },
        {
          brand: "Oakley",
          model: "Mod 3",
          size: "L",
          terrain: "All-Mountain",
          personality: "Bold",
          price: 130,
          id: 3006
        }
 
  ];
 
export const BootsList: Boot[] = [
    {
      brand: "Atomic",
      model: "Hawx Ultra",
      size: 7.5,
      price: 599,
      id: 4001
    },
    {
      brand: "Atomic",
      model: "Hawx Prime",
      size: 6.5,
      price: 399,
      id: 4002
    },
    {
      brand: "Rossignol",
      model: "Alltrack Elite",
      size: 8.0,
      price: 699,
      id: 4003
    },
    {
      brand: "Rossignol",
      model: "Track 80",
      size: 7.5,
      price: 299,
      id: 4004
    },
    {
      brand: "Lange",
      model: "RX 120",
      size: 6.5,
      price: 599,
      id: 4005
    },
    {
      brand: "Lange",
      model: "SX 70",
      size: 5.5,
      price: 299,
      id: 4006
    },
    {
      brand: "Salomon",
      model: "S/Pro 120",
      size: 7.0,
      price: 699,
      id: 4007
    },
    {
      brand: "Salomon",
      model: "QST Access Custom Heat",
      size: 8.5,
      price: 599,
      id: 4008
    },
    {
      brand: "Nordica",
      model: "Speedmachine 130",
      size: 11,
      price: 699,
      id: 4009
    },
    {
      brand: "Nordica",
      model: "Cruise 60",
      size: 10,
      price: 249,
      id: 4010
    },
    {
      brand: "Tecnica",
      model: "Cochise 120",
      size: 7.5,
      price: 599,
      id: 4011
    },
    {
      brand: "Tecnica",
      model: "Mach Sport HV 85",
      size: 6.5,
      price: 450,
      id: 4012
    }
  ];
  
export const GogglesList: Goggle[] = [
    {
      brand: "Oakley",
      model: "Flight Deck",
      reflective: true,
      price: 200,
      id: 5001
    },
    {
      brand: "Smith",
      model: "I/O Mag",
      reflective: true,
      price: 240,
      id: 5002
    },
    {
      brand: "Giro",
      model: "Contact",
      reflective: false,
      price: 150,
      id: 5003
    }
  ];




  
  
  