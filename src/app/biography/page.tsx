import React from 'react';
import Chapter from "@/app/biography/_components/Chapter";
import {cn} from "@/lib/utils";
import {quintessential} from "@/lib/fonts";
import Header from '@/components/Header';

const Page = () => {
  return (
      <div className="scroll-snap-type">
        <Header
            className="fixed z-50 pt-12 px-24"
            logoClass="text-white"
        />

        <Chapter
            title="Preface."
            date="July 15, 1606 - October 4, 1669"
            header="Rembrandt Harmens van Rijn"
            description="Rembrandt biography and personal life"
            img="/img/bio-1.png"
        >
          <p>In the XVII century, the Dutch state gained independence thanks to the revolution. It was at this time that the future great artist Rembrandt Harmens van Rijn was born. The painter’s hometown is ancient Leiden, date of birth — July 15, 1607.</p>
          <p>Rembrandt became the sixth child of a large family of Harmens van Rijn, a fairly wealthy man who owned a mill and a malt house. In addition, the father also owned two houses, as well as a decent dowry of his wife, Cornelia Neltier.</p>
          <p>The windmill, the property of the painter’s father, was located on the banks of the mighty Rhine. From an early age, the boy admired the beauty of the landscape, the azure river illuminated by the rays of the rising or setting sun. Perhaps it was these childhood memories that helped the artist master the ability to apply light and shadow, skillfully use paints.</p>
        </Chapter>

        <Chapter
            title="Chapter 1."
            description="Rembrandt 's Childhood"
            img="/img/bio-2.png"
        >
          <p className={cn(quintessential.className, "text-2xl")}>From childhood, Rembrandt was distinguished by observation. A source of inspiration for him could be the streets of his hometown, visits to shopping markets, where a variety of people met, completely unlike each other. The boy liked to sketch their faces on paper.</p>
          <p>The painter’s childhood years were remembered for a feeling of happiness. Parents did not dissuade their son from drawing, on the contrary, seeing his success, they decided to develop talent. At the age of thirteen, he was found a teacher, he became the Dutch artist Jacob van Swanenburg.</p>
          <p>In 1623, Rembrandt moved to Amsterdam, and began studying painting with the artist Peter Lasman. For six months Rembrandt studied with him not only painting, but also engraving.</p>
        </Chapter>

        <Chapter
            title="Chapter 2."
            description="An aspiring artist"
            img="/img/bio-3.png"
        >
          <p className={cn(quintessential.className, "text-2xl")}>The learning process was progressing perfectly. Rembrandt quickly adopted the brush technique from his mentor. From Peter, the young artist learned to work with bright and saturated colors, to convey the play of shadow and light, to work out small details scrupulously.</p>
          <p>Rembrandt achieved real success in the capital. On June 8, 1633, the painter was introduced to the daughter of a wealthy burgher, Saskia van Eilenburch, who brought him into the light. Thanks to the girl, Rembrandt became a member of many noble houses, won a strong position in society. Rembrandt painted most of his masterpieces during his stay in Amsterdam.</p>
          <p>In 1642, the Rifle Society commissioned van Rijn to create a group portrait, which they wanted to place in the new building. For completely incomprehensible reasons, the picture was called «Night Watch». Scientists are of the opinion that it was this canvas that had a great influence on the further creative biography of Rembrandt, namely, led him to bankruptcy in 1653. All potential customers disappeared, the painter’s canvases became unclaimed.</p>
        </Chapter>

        <Chapter
            title="Chapter 3."
            description="Personal life of the creator"
            img="/img/bio-4.png"
        >
          <p className={cn(quintessential.className, "text-2xl")}>The artist’s beloved wife, Saskia, died in 1642. She died of tuberculosis. Four children were born in this marriage, but only one survived — the son Titus, the rest died as infants. After the death of his wife, father and son maintained warm friendly relations.</p>
          <p>In 1656, the painter began serious financial difficulties, he declares his own bankruptcy, and goes to live in a secluded house on the outskirts of Amsterdam.</p>
          <p>The artist’s life, which began so well, with her happy childhood and carefree youth, security and recognition of society, has remained in the past. And in the present, Rembrandt was waiting for a harsh reality — the absence of customers and impoverished old age. The artist’s condition has always been reflected in his paintings. Even during the years of his life with Saskia, his paintings breathed joy, were filled with sunshine and happiness.</p>
          <p>In 1661, Rembrandt painted the painting «The Conspiracy of Julius Civilis», which the customers never paid for. The reason for the refusal of payment was that the artist did not work out the faces of the participants of the conspiracy scrupulously, as he did throughout his creative activity.</p>
        </Chapter>

        <Chapter
            title="Chapter 4."
            description="Death of the Great"
            img="/img/bio-5.png"
        >
          <p>The artist’s only son, Titus, died in 1668 from the plague. Rembrandt happened to outlive his heir, and this had a very bad effect on the mental state of the painter.</p>
          <p className={cn(quintessential.className, "text-2xl")}>Rembrandt Harmens van Rijn died on October 4, 1669. The place of his burial was the Netherlands Westerkerk Church in Amsterdam.</p>
          <p>The great Rembrandt died on October 4, 1669 and was buried as a poor man. By that time, he had lost both Hendrikje and his only son with his daughter-in-law and granddaughter. In the last year, only his 15-year-old daughter, Cornelia, remained with him. The aged master depicted the faces of deceased loved ones on a fictional «Family Portrait» that remained unfinished. At the age of 18, Cornelia married an artist, an equally poor orphan. She named her son and daughter Rembrandt and Hendrikje.</p>
        </Chapter>
      </div>
  );
};

export default Page;