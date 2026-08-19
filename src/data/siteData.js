import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';
import slide5 from '../assets/slide5.png';

/**
 * HAŞIMOĞLU FERMUAR - SİTE VERİLERİ (siteData.js)
 * 
 * REACT ÖĞRENME NOTU:
 * Babanızın dükkanına ait tüm bilgileri bu dosyada topladık.
 * React bileşenlerimiz (Components) bu nesnelerdeki verileri okuyup ekrana basacak.
 */

export const siteInfo = {
  companyName: "HAŞİMOĞLU FERMUAR",
  tagline: "20 Yıllık Tecrübe & Üstün Kalite İmalat",
  title: "Tekstil Sektörüne Özel Kaliteli Fermuar Çözümleri",
  subtitle: "20 yılı aşkın imalat tecrübemizle; metal, kemik, naylon ve gizli fermuar çeşitlerini en yüksek kalite standartlarında üretip sunuyoruz.",
  about: {
    badge: "20 Yıllık Deneyim",
    title: "20 Yıldır Fermuarda Kalite ve Güvenin Adresi",
    description1: "Haşımoğlu Fermuar olarak 20 yıldır tekstil ve konfeksiyon sektörüne birinci sınıf fermuar üretimi ve satışı yapmaktayız.",
    description2: "Kendi imalatımız olan dayanıklı, takılmayan ve uzun ömürlü fermuarlarımızla hem üreticilerin hem de perakende müşterilerimizin çözüm ortağıyız. İstenilen boy, renk ve çeşide göre özel üretim yapıyoruz.",
    experienceYears: "20+",
    happyClients: "3000+",
  },
  contact: {
    phone: "+90 (532) 583 08 32",
    whatsapp: "905325830832",
    email: "fadil.celik@hotmail.com",
    address: "Yıldırım, 100. Yıl Cd 9/a,34000,Bayrampaşa-İstanbul",
    workingHours: "Hafta İçi: 08:30 - 18:30 | Cumartesi: 09:00 - 15:00",
    closedDays: "Pazar: Kapalı",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Y%C4%B1ld%C4%B1r%C4%B1m%2C+100.+Y%C4%B1l+Cd+9%2Fa%2C34000%2CBayrampa%C5%9Fa-%C4%B0stanbul&t=&z=16&ie=UTF8&iwloc=&output=embed",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Y%C4%B1ld%C4%B1r%C4%B1m%2C+100.+Y%C4%B1l+Cd+9%2Fa%2C34000%2CBayrampa%C5%9Fa-%C4%B0stanbul"
  }
}

export const productsData = [
  {
    id: 1,
    title: "Metal Fermuarlar",
    description: "Mont, deri ceket, kot ve ağır tekstil ürünleri için sağlam metal dişli fermuarlar.",
    iconName: "Shield",
    badge: "Sağlam ve Dayanıklı",
    image: slide1
  },
  {
    id: 2,
    title: "Kemik Fermuarlar",
    description: "Spor giyim, kaban ve çocuk kıyafetlerine özel renk renk, hafif ve takılmayan kemik fermuarlar.",
    iconName: "Zap",
    badge: "Renkli ve Hafif",
    image: slide3
  },
  {
    id: 3,
    title: "Spiral Fermuarlar",
    description: "Giyim, çanta ve ev tekstili ürünlerinde kullanılan esnek, hafif ve akıcı spiral dişli fermuarlar.",
    iconName: "RefreshCw",
    badge: "Esnek Kullanım",
    image: slide5
  },
  {
    id: 4,
    title: "Gizli Fermuarlar",
    description: "Abiye, etek ve elbiselerde dışarıdan görünmeyen, estetik ve pürüzsüz kayan gizli fermuarlar.",
    iconName: "Scissors",
    badge: "Zarif ve İnce",
    image: slide4
  },
  {
    id: 5,
    title: "Su Geçirmez Fermuarlar",
    description: "Teknik mont, yağmurluk, çanta ve dış mekân ürünleri için koruyucu kaplamalı fermuarlar.",
    iconName: "Layers",
    badge: "Suya Karşı Koruma",
    image: slide2
  },
  {
    id: 6,
    title: "Ayırmalı Fermuarlar",
    description: "Mont, kaban, yelek ve sweatshirt gibi tamamen açılması gereken ürünlerde kullanılan fermuarlar.",
    iconName: "PanelTopOpen",
    badge: "Mont ve Kaban",
    image: slide4
  },
  {
    id: 7,
    title: "Kapalı Uçlu Fermuarlar",
    description: "Pantolon, etek, elbise, yastık ve cep gibi iki ucu sabit kalan ürünler için fermuarlar.",
    iconName: "LockKeyhole",
    badge: "Cep ve Giyim",
    image: slide3
  },
  {
    id: 8,
    title: "İki Yönlü Fermuarlar",
    description: "Çift yönden açılabilen; mont, tulum, çanta ve iş kıyafetlerinde kullanılan pratik fermuarlar.",
    iconName: "ArrowDownUp",
    badge: "Çift Yönlü",
    image: slide1
  },
  {
    id: 9,
    title: "Çift Sürgülü Fermuarlar",
    description: "Çantalar, valizler ve geniş açıklıklı ürünlerde iki sürgüyle kolay kullanım sağlayan fermuarlar.",
    iconName: "MoveHorizontal",
    badge: "Çanta ve Valiz",
    image: slide4
  },
  {
    id: 10,
    title: "Ters Dişli Fermuarlar",
    description: "Dişleri arka yüzde kalan; spor giyim, teknik ürün ve modern tasarımlarda kullanılan fermuarlar.",
    iconName: "FlipHorizontal2",
    badge: "Teknik Tasarım",
    image: slide5
  }
];

export const featuresData = [
  {
    id: 1,
    title: "Kendi İmalatımız",
    description: "Aracı olmadan doğrudan üreticiden almanın fiyat ve kalite avantajı.",
    iconName: "Factory"
  },
  {
    id: 2,
    title: "19 Yıllık Sektör Tecrübesi",
    description: "Yılların birikimiyle takılmayan, kopmayan sağlam diş yapısı.",
    iconName: "Award"
  },
  {
    id: 3,
    title: "İstenen Ölçüde Özel Kesim",
    description: "İhtiyacınıza uygun cm bazında özel boy fermuar imalatı.",
    iconName: "Scissors"
  },
  {
    id: 4,
    title: "Hızlı Teslimat & Toptan Satış",
    description: "Stoktan aynı gün kargo ve yüksek adetli imalat kapasitesi.",
    iconName: "Truck"
  }
];

export const galleryData = [
  {
    id: 1,
    title: "Metal Dişli Fermuar Üretimi",
    category: "Metal Fermuar",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Renkli Kemik Fermuar Stokları",
    category: "Kemik Fermuar",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Özel Tasarım Elcik ve Kürsörler",
    category: "Aksesuarlar",
    image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Tekstil ve Konfeksiyon İmalatımız",
    category: "İmalathane",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Mustafa Yılmaz",
    role: "Tekstil Atölyesi Sahibi",
    comment: "10 yıldır mont imalatımızda sadece Haşımoğlu Fermuar kullanıyoruz. Bir kere bile takılma veya fermuar patlaması şikayeti almadık. Babana selamlar!",
    rating: 5
  },
  {
    id: 2,
    name: "Hasan Karaca",
    role: "Deri Ceket Üreticisi",
    comment: "Metal fermuarlarının kalitesi ve diş sağlamlığı mükemmel. Özel ölçü siparişlerimizi hemen teslim ediyorlar.",
    rating: 5
  },
  {
    id: 3,
    name: "Sevgi Öztürk",
    role: "Moda Tasarımcısı",
    comment: "Gizli fermuarlarda renk seçeneği ve akıcılığı harika. Toptan alımlarda her zaman yardımcı oluyorlar.",
    rating: 5
  }
];
