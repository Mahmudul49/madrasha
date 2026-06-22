import Image from 'next/image';
import aboutImage from '/public/img-2.jpg'; // ছবিটি public ফোল্ডারে রাখো

export default function AboutSection() {
  return (
    <section id="about" className="section section--white about-section">
      <div className="container-1200">
        <div className="text-center mb-5">
          <span className="section-ornament" aria-hidden="true"></span>
          <h2 className="section-heading text-center display-6 fw-bold">
            🕌 মাদ্রাসার পরিচিতি
          </h2>
        </div>

        <div className="about-feature">
          <div className="about-feature-media">
            <Image
              src={aboutImage}
              alt="মাদ্রাসার ছাত্রদের ছবি"
              fill
              sizes="(max-width: 768px) 100vw, 44vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className="about-feature-body">
            <p className="lead-para">
              <strong>তাকওয়া নূরানী ও হাফেজিয়া মাদ্রাসা</strong> একটি আধুনিক ও কার্যকরী ইসলামী শিক্ষা প্রতিষ্ঠান, যা প্রাচীন ইসলামী জ্ঞানকে বর্তমান যুগের প্রযুক্তির মাধ্যমে সহজলভ্য এবং সাধারণ মানুষের কাছে পৌঁছে দিতে কাজ করে যাচ্ছে। মাদ্রাসাটি মুসলিম ছাত্র-ছাত্রীদের জন্য অত্যন্ত গুরুত্বপূর্ণ ইসলামী শিক্ষা প্রদান করে, যা তাদের জীবনকে আলোকিত করবে এবং সত্যের পথে পরিচালিত করবে।
            </p>
            <p>
              এটি একটি অত্যন্ত স্বীকৃত এবং সম্মানিত প্রতিষ্ঠান, যা ছাত্রদের কওমি শিক্ষা, তাফসীর, হাদিস, ফিকহ, আরবি ভাষা, ইসলামী ইতিহাস এবং অন্যান্য গুরুত্বপূর্ণ ইসলামী বিষয়ের উপর গভীর জ্ঞান প্রদান করে। আমাদের লক্ষ্য হল, ছাত্রদের মধ্যে ইসলামের মৌলিক তত্ত্ব এবং জীবনদর্শন প্রতিষ্ঠা করা, যাতে তারা সঠিক ও সৎ মুসলিম নাগরিক হিসেবে সমাজে ভূমিকা রাখতে সক্ষম হয়।আমাদের পাঠ্যক্রম সঠিক ইসলামী জ্ঞানের ভিত্তিতে তৈরি করা হয়েছে এবং এটি ধর্মীয় শিক্ষা ও ব্যক্তিগত উন্নতি উভয় ক্ষেত্রেই সহায়ক।
            </p>
            <p className="mb-0">
              এছাড়াও, মাদ্রাসাটি শিক্ষার্থীদেরকে সৎ নাগরিক হিসেবে গড়ে তোলার জন্য তাদের চরিত্র গঠনে গুরুত্ব দেয় এবং তাদেরকে ইসলামী মূল্যবোধ ও নৈতিক শিক্ষা প্রদান করে থাকে।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
