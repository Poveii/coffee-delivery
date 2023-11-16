import expressoCoffee from '../../../assets/coffee/expresso.png'
import americanoCoffee from '../../../assets/coffee/americano.png'
import cremosoCoffee from '../../../assets/coffee/expresso_cremoso.png'
import geladoCoffee from '../../../assets/coffee/cafe_gelado.png'
import leiteCoffee from '../../../assets/coffee/cafe_com_leite.png'
import latteCoffee from '../../../assets/coffee/latte.png'
import capuccinoCoffee from '../../../assets/coffee/capuccino.png'
import macchiatoCoffee from '../../../assets/coffee/macchiato.png'
import mochaccinoCoffee from '../../../assets/coffee/mochaccino.png'
import hotChocolate from '../../../assets/coffee/chocolate_quente.png'
import cubanoCoffee from '../../../assets/coffee/cubano.png'
import havaianoCoffee from '../../../assets/coffee/havaiano.png'
import arabianCoffee from '../../../assets/coffee/arabe.png'
import irishCoffee from '../../../assets/coffee/irlandes.png'

export interface ICoffeeList {
  id: number
  coffee: string
  tags: string[]
  title: string
  description: string
}

export const coffeeList: ICoffeeList[] = [
  {
    id: 0,
    coffee: expressoCoffee,
    tags: ['tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
  },
  {
    id: 1,
    coffee: americanoCoffee,
    tags: ['tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
  },
  {
    id: 2,
    coffee: cremosoCoffee,
    tags: ['tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
  },
  {
    id: 3,
    coffee: geladoCoffee,
    tags: ['tradicional', 'gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
  },
  {
    id: 4,
    coffee: leiteCoffee,
    tags: ['tradicional', 'com leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
  },
  {
    id: 5,
    coffee: latteCoffee,
    tags: ['tradicional', 'com leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
  },
  {
    id: 6,
    coffee: capuccinoCoffee,
    tags: ['tradicional', 'com leite'],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },
  {
    id: 7,
    coffee: macchiatoCoffee,
    tags: ['tradicional', 'com leite'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
  },
  {
    id: 8,
    coffee: mochaccinoCoffee,
    tags: ['tradicional', 'com leite'],
    title: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
  },
  {
    id: 9,
    coffee: hotChocolate,
    tags: ['especial', 'com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
  },
  {
    id: 10,
    coffee: cubanoCoffee,
    tags: ['especial', 'alcoólico', 'gelado'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
  },
  {
    id: 11,
    coffee: havaianoCoffee,
    tags: ['especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
  },
  {
    id: 12,
    coffee: arabianCoffee,
    tags: ['especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
  },
  {
    id: 13,
    coffee: irishCoffee,
    tags: ['especial', 'alcoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
  },
]
