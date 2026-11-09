import { Component } from '@angular/core';
import { Produit } from '../../type/produit';
@Component({
  selector: 'app-product-cart',
  imports: [],
  templateUrl: './product-cart.html',
  styleUrl: './product-cart.css',
})
export class ProductCart {
   produit: Produit = {
    nom: 'Lenovo',
    prix: 899.99,
    stock: 15,
    description: 'Ordinateur portable performant avec 16 Go de RAM.',
    url: 'https://p3-ofp.static.pub//fes/cms/2025/01/31/j32w2gpcpsovs864pnsjk1h9wxr0b1302379.png?width=584&height=584'
  };

  quantite:number = 1 ;
  isValid = (this.quantite)>=1;
  valider(valeur:string){
    this.quantite = Number(valeur);
    console.log(this.quantite);
  }

  plus(){
    this.quantite = Math.min(this.quantite+1,this.produit.stock);
  }
  moins(){
    this.quantite=Math.max(this.quantite-1,0);
  }
  ajouter(){
    if(this.produit.stock>= this.quantite){
      this.produit.stock-=this.quantite;
    }
    
  }

}
