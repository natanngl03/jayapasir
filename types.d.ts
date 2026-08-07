type HandlerPage = 'react' | 'astro';

interface GlobalProps {
   handler: HandlerPage;
}

interface ProductDetail {
   title: string;
   page: string;
}


interface ProductType {
   params: {
      product: string
   },
   title: string,
   price: {
      truck: string,
      engkel: string,
      pickup: string
   },
   image: string
}