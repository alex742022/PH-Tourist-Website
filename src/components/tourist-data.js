import img1 from '../assets/images/banaue-rice-terraces-ifugao.avif'
import img2 from '../assets/images/cebu-beaches-diving-spots.avif'
import img3 from '../assets/images/chocolate-hills-bohol.avif'
import img4 from '../assets/images/cloud-9-siargao.avif'
import img5 from '../assets/images/kawasan-falls-cebu.avif'
import img6 from '../assets/images/kayangan-lake-coron-palawan.avif'
import img7 from '../assets/images/puerto-princesa-underground-river.avif'
import img8 from '../assets/images/rizal-park-manila.avif'
import img9 from '../assets/images/taal-volcano-batangas.avif'
import img10 from '../assets/images/white-beach-boracay.avif'

const touristData = [
    {
      id: 1,
      location: "White Beach, Boracay",
      image: img1,
      text: "Long hailed as one of the best white sand beaches in the Philippines and the entire world, Boracay’s claim to fame is its 4-kilometer stretch of pure white, powdery sand called White Beach. Cliche as it sounds, White Beach is truly postcard-perfect, with tall coconut trees lined up and crystal-clear calm waters rounding up its unmatched beauty, making it the top attraction in Boracay tours and the best tourist destination in the Philippines. Those who want to indulge during their holiday can also do so as Boracay is home to some of the best 5 star hotels in the Philippines, as well as several honeymoon resorts and some of the best beach resorts in the Philippines. You can also have a workation here. Its prominence in global publications has drawn in an influx of tourists over the last decades, and there is no shortage of hotels, restaurants, and Boracay bars on the entire island."
    },
    {
        id: 2,
        location: "Chocolate Hills, Bohol",
        image: img2,
        text: "Included in the UNESCO World Heritage Natural Monuments list, the Chocolate Hills of Bohol are a geomorphic wonder and truly a sight to behold. It is one of the amazing tourist spots in the Philippines to offer a unique landscape, with its 1,268 cone-shaped hills that turn chocolatey brown during the dry season, hence its name. The limestone hills in this iconic Philippine landmark vary in size but almost look similar in shape and range from 30 to 120 meters in height. It’s a must-add in any itinerary for Bohol trips. Make your way to the town of Carmen, where the Chocolate Hills Main Viewpoint can be found. You can also see the hills via Bohol countryside tours. Aside from the Chocolate Hills, there is also a treasure chest of natural wonders and other fun things to do in Bohol, including a relaxing Loboc river cruise and exploring Balicasag Island, a popular Bohol diving spot."
    },
    {
        id: 3,
        location: "Puerto Princesa Underground River, Palawan",
        image: img3,
        text: "The gateway to the Philippines’ Last Frontier, Palawan, is its capital Puerto Princesa. It is here that you can find the world’s longest navigable underground river and a UNESCO World Heritage Site, the Puerto Princesa Underground River or the Puerto Princesa Subterranean River National Park. To explore this world-famous attraction and one of the best Philippine caves, book a Puerto Princesa underground river tour. Paddleboats of the Puerto Princesa underground river tours cruise through scenic limestone cliffs as they makes their way through the 1.5-kilometer underground river cave. The park is also teeming with wildlife like crab-eating monkeys, monitor lizards, and bats. Island hopping escapades in Honda Bay and a visit to the Crocodile Farm are also highly recommended among the many things to do in Puerto Princesa."
    },
    {
        id: 4,
        location: "Cloud 9, Siargao",
        image: img4,
        text: "Siargao’s rise as a top tourist destination in the Philippines is nothing short of meteoric. Once a sleepy island in Surigao del Norte, it has become one of the favorite destinations and playgrounds for travelers, and it is primarily because of one activity: surfing. It is now known as the Philippines' surfing capital, and some even regard it as the surfing mecca of Asia. Surfers are drawn to Cloud 9, the most famous surfing spot in the entire country and a must in any visitor's Siargao itinerary. From November until April, all is well with Cloud 9’s thick tubes, making it a perfect place to get stoked (note: it is recommended for advanced surfers only). But you do not need to go surfing in Siargao to enjoy this island destination as there are also other Siargao tourist spots to visit like rock pools, waterfalls, and the nearby Sohoton Lagoon, where you can swim with thousands of non-sting jellyfish."
    },
    {
        id: 5,
        location: "Cebu’s Beaches and Diving Spots",
        image: img5,
        text: "Cebu has been recently awarded as part of UNESCO’s Network of Creative Cities, but its main treasure lies deep down. The island draws over two million foreign travelers every year, greeted by rich waters teeming with abundant marine life. There are also many Cebu hotels that you can book for your trip that can cater to any budget. Diving in Cebu is also a great experience as the island boasts many beautiful Cebu diving spots in the entire country and even the world, featuring underwater caves, shallow shipwrecks, and marine sanctuaries. Cebu island hopping tours are popular, thanks to the beaches of Cebu, Mactan, Camotes, and Bantayan Island. Moalboal island hopping tours are also available for those who want to explore more of Cebu. Off the northernmost tip of Cebu, tiny Malapascua Island packs many surprises, including diving with thresher sharks. Apart from diving in Malapascua, you can also go on a sardine run tour."
    },
    {
        id: 6,
        location: "Banaue Rice Terraces, Ifugao",
        image: img6,
        text: "Hand-chiseled some 2000 years ago, the Banaue Rice Terraces in Banaue of Ifugao, North Luzon, is a remarkable destination and is truly one of the most beautiful places in the Philippines and regarded as one of the Philippines' iconic landmarks. "
    },
    {
        id: 7,
        location: "Rizal Park, Manila",
        image: img7,
        text: "Many travelers skip Manila and make their way to the Philippines' other islands but a day or two in the country’s capital to go on Manila tours is still highly recommended, especially for those looking for the best places in the Philippines for a family vacation."
    },
    {
        id: 8,
        location: "Kayangan Lake, Coron, Palawan",
        image: img8,
        text: "Undoubtedly one of the most photographed and iconic destinations in the Philippines is Kayangan Lake in Coron, Palawan. Going on a Kayangan Lake Coron tour will allow you to see its lagoon that is a dreamy mix of blues and greens glistening on a bright, sunny day. It should definitely be on your Coron Palawan itinerary."
    },
    {
        id: 9,
        location: "Kawasan Falls, Cebu",
        image: img9,
        text: "If you like jumping into or swimming in cool cascading waters, Kawasan Falls in Cebu hits the sweet spot. It is a multi-layered waterfall in the town of Badian and is best known for its turquoise waters. With a height of 40 meters, the first cascade, or level, is where most visitors stay, swim, and enjoy a natural water massage on board a bamboo raft. A 10-minute trek takes you up to the quieter second cascade."
    },
    {
        id: 10,
        location: "Taal Volcano and Lake, Tagaytay, and Batangas",
        image: img10,
        text: "Locals and foreign visitors from Manila often take a quick escape from the megacity and make their way down south to Tagaytay, a relaxing town famous for its cool weather, magnificent views, and many tourist spots popular for being one of the best kid-friendly places near Manila.The best Tagaytay hotels view faces Taal Volcano, one of the world’s smallest active volcano and beautiful landmarks in the Philippines. The volcano sits on an island within a lake within an island. "
    }
]
export default touristData;