

// types of products

export type Binding = {
    brand: string,
    model: string,
    size: string[],
    type: string,
    price: number,
}

export type Snowboard = {
    brand: string
    model: string
    size: string[]
    terrain: string
    personality: string
    price: number
    
}

export type Helmet = {
        brand: string;
        model: string;
        size: string;
        terrain: string;
        personality: string;
        price: number;
      }

export type Boot = {
    brand: string;
    model: string;
    size: number;
    price: number;
  }

export type Goggle = {
    brand: string;
    model: string;
    reflective: boolean;
    price: number;
  }

// list of products

export const BindingsList: Binding[] = [
    {
      brand: "Burton",
      model: "Custom Binding",
      size: ['L'],
      type: "Strap",
      price: 199

    },
    {
      brand: "Burton",
      model: "Cartel Binding",
      size: ['L', 'M'],
      type: "Strap",
      price: 269
    },
    {
      brand: "K2",
      model: "Vo3 Snowboard Binding",
      size: ['L', 'M'],
      type: "Strap",
      price: 219
    },
    {
      brand: "K2",
      model: "Formula Snowboard Binding",
      size: ['L'],
      type: "Strap",
      price: 169
    },
    {
      brand: "Union",
      model: "Atlas Snowboard Binding",
      size: ['L', 'M'],
      type: "Strap",
      price: 229
    },
    {
      brand: "Union",
      model: "Strata Snowboard Binding",
      size: ['L'],
      type: "Strap",
      price: 199
    },
    {
      brand: "Burton Step-On Bindings",
      model: "Step-On Bindings",
      size: ['L', 'M'],
      type: "Step-In",
      price: 499.95
    },
    {
      brand: "Burton Step-On Bindings",
      model: "Hitchhiker Snowboard Bindings",
      size: ['L', 'M'],
      type: "Step-In",
      price: 449
    },
    {
      brand: "Ride",
      model: "Rodeo Snowboard Binding",
      size: ['L'],
      type: "Strap",
      price: 219
    },
    {
      brand: "Ride",
      model: "Capo Snowboard Binding",
      size: ['L'],
      type: "Strap",    
      price:239
    },
    {
      brand: "Rossignol",
      model: "Foil Snowboard Binding",
      size: ['L', 'M'],
      type: "Strap",
      price: 209
    },
    {
      brand: "Rossignol",
      model: "District Snowboard Binding",
      size: ['L', 'M'],
      type: "Strap",
      price: 189
    },
  ];
  
export const snowboardsList: Snowboard[] = [
    {
      brand: "Burton",
      model: "Custom Snowboard",
      size: ['L'],
      terrain: "All-Mountain",
      personality: "Versatile",
      price: 500
    },
    {
      brand: "Jones",
      model: "Mountain Twin Snowboard",
      size: ['L', 'M'],
      terrain: "All-Mountain",
      personality: "Versatile",
      price: 600 
    },
    {
      brand: "Gnu",
      model: "B-Nice Snowboard",
      size: ['L', 'M'],
      terrain: "All-Mountain",
      personality: "Versatile",
      price: 400
    },
    {
      brand: "K2",
      model: "Remedy Snowboard",
      size: ['L'],
      terrain: "All-Mountain",
      personality: "Aggressive",
      price: 600 
    },
    {
      brand: "Burton",
      model: "Process Snowboard",
      size: ['L'],
      terrain: "All-Mountain",
      personality: "Aggressive",
      price: 600 
    },
    {
      brand: "Arbor",
      model: "Foundation Snowboard",
      size: ['L', 'M'],
      terrain: "All-Mountain",
      personality: "Versatile",
      price: 400
    },
    {
      brand: "Capita",
      model: "Defenders of Awesome Snowboard",
      size: ['L', 'M'],
      terrain: "All-Mountain",
      personality: "Aggressive",
      price: 600 
    },
    {
      brand: "Ride",
      model: "Warpig Snowboard",
      size: ['L', 'M'],
      terrain: "All-Mountain",
      personality: "Aggressive",
      price: 500
    },
    {
      brand: "Never Summer",
      model: "Proto Snowboard",
      size: ['L'],
      terrain: "All-Mountain",
      personality: "Aggressive",
      price: 500
    },
    {
      brand: "Salomon",
      model: "QST Lumen Snowboard",
      size: ['L'],
      terrain: "All-Mountain",
      personality: "Versatile",
      price: 600
    }
  ];
  
export const helmetsList: Helmet[] = [
        {
          brand: "Smith Optics",
          model: "Vantage MIPS",
          size: "M",
          terrain: "All-Mountain",
          personality: "Adventurous",
          price: 279
        },
        {
          brand: "Smith Optics",
          model: "Holt",
          size: "L",
          terrain: "All-Mountain",
          personality: "Sporty",
          price: 79
        },
        {
          brand: "Giro",
          model: "Ledge MIPS",
          size: "S",
          terrain: "Park",
          personality: "Cool",
          price: 89
        },
        {
          brand: "Giro",
          model: "Nine MIPS",
          size: "L",
          terrain: "All-Mountain",
          personality: "Stylish",
          price: 149
        },
        {
          brand: "Oakley",
          model: "Mod 5",
          size: "M",
          terrain: "All-Mountain",
          personality: "Innovative",
          price: 230
        },
        {
          brand: "Oakley",
          model: "Mod 3",
          size: "L",
          terrain: "All-Mountain",
          personality: "Bold",
          price: 130
        }
 
  ];
 
export const BootsList: Boot[] = [
    {
      brand: "Atomic",
      model: "Hawx Ultra",
      size: 7.5,
      price: 599
    },
    {
      brand: "Atomic",
      model: "Hawx Prime",
      size: 6.5,

      price: 399
    },
    {
      brand: "Rossignol",
      model: "Alltrack Elite",
      size: 8.0,

      price: 699
    },
    {
      brand: "Rossignol",
      model: "Track 80",
      size: 7.5,

      price: 299
    },
    {
      brand: "Lange",
      model: "RX 120",
      size: 6.5,

      price: 599
    },
    {
      brand: "Lange",
      model: "SX 70",
      size: 5.5,
      price: 299
    },
    {
      brand: "Salomon",
      model: "S/Pro 120",
      size: 7.0,
      price: 699
    },
    {
      brand: "Salomon",
      model: "QST Access Custom Heat",
      size: 8.5,

      price: 599
    },
    {
      brand: "Nordica",
      model: "Speedmachine 130",
      size: 11,

      price: 699
    },
    {
      brand: "Nordica",
      model: "Cruise 60",
      size: 10,

      price: 249
    },
    {
      brand: "Tecnica",
      model: "Cochise 120",
      size: 7.5,

      price: 599
    },
    {
      brand: "Tecnica",
      model: "Mach Sport HV 85",
      size: 6.5,
      price: 450,
    }
  ];
  
export const GogglesList: Goggle[] = [
    {
      brand: "Oakley",
      model: "Flight Deck",
      reflective: true,
      price: 200
    },
    {
      brand: "Smith",
      model: "I/O Mag",
      reflective: true,
      price: 240
    },
    {
      brand: "Giro",
      model: "Contact",
      reflective: false,
      price: 150
    }
  ];




  
  
  