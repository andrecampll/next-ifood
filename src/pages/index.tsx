import Header from '../components/Header';
import Categories from '../components/Categories';
import Voucher from '../components/Voucher';
import Sponsor from '../components/Sponsor';
import Famous from '../components/Famous';

export default function Home() {
  return (
    <div>
      <Header />
      <Voucher />
      <Categories />
      <Sponsor />
      <Famous />
    </div>
  )
}
