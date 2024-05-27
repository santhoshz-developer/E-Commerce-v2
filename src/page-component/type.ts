export interface BrandLogo {
    data: {
      attributes: {
        url: string;
      };
    }[];
  }
  
export interface CardItem {
    brandlogo: BrandLogo;
  }

  // ProductTypes.ts
export interface HoverColor {
    backgroundColor: string;
    color: string;
  }
  
  export interface CardImage {
    cardimage: never[];
    image: {
      data: {
        attributes: {
          url: string;
        };
      }[];
    };
  }
  
  export interface Card {
    id: number;
    title: string;
    content: string;
    prize: string;
    cardimage: CardImage[];
    color?: {
      hover?: HoverColor[];
    };
    link: string;
  }
  
  export interface NavbarItem {
    title: string;
  }
  
  export interface FilterButton {
    title: string;
    color?: {
      button?: {
        backgroundColor: string;
      }[];
    };
    textcolor: string;
  }
  
  export interface ProductItem {
    title: string;
    navbar: NavbarItem[];
    filterbutton: FilterButton[];
    cards: Card[];
  }
  
  export interface ProductsProps {
    productitems: ProductItem[];
  }
 //Seller.ts
 export interface Cards {
    id: number;
    title: string;
    link: string;
    content: string;
    prize: string;
  }
export interface NavbarItem {
    title: string;
    link: string;
  }
  //ProductDetails.ts
export interface ProductDetailsProps {
    productId: any;
  }