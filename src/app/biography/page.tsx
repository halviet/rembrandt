import React from 'react';
import Chapter from "@/app/biography/_components/Chapter";

const Page = () => {
  return (
      <div>
        <Chapter
            date="July 15, 1606 - October 4, 1669"
            header="Rembrandt Harmens van Rijn"
        >
          <p>In the XVII century, the Dutch state gained independence thanks to the revolution. It was at this time that the future great artist Rembrandt Harmens van Rijn was born. The painter’s hometown is ancient Leiden, date of birth — July 15, 1607.</p>
          <p>Rembrandt became the sixth child of a large family of Harmens van Rijn, a fairly wealthy man who owned a mill and a malt house. In addition, the father also owned two houses, as well as a decent dowry of his wife, Cornelia Neltier.</p>
          <p>The windmill, the property of the painter’s father, was located on the banks of the mighty Rhine. From an early age, the boy admired the beauty of the landscape, the azure river illuminated by the rays of the rising or setting sun. Perhaps it was these childhood memories that helped the artist master the ability to apply light and shadow, skillfully use paints.</p>
        </Chapter>
      </div>
  );
};

export default Page;