(() => {
  const fullMenuCategories = [
    {
      id: 'menu-salad',
      title: 'Salad',
      items: [
        ['Fatoush Salad', '500'],
        ['Mutabal', '500'],
        ['Humus', '500'],
        ['Labanies Tabula', '500'],
        ['Arabian Palace Salad', '1,400'],
        ['Half Arabian Palace Salad', '800'],
        ['Greek Salad', '600'],
        ['Chicken Salad', '700'],
        ['Arabian Salad', '300'],
        ['Garden Salad', '600']
      ]
    },
    {
      id: 'menu-sauces',
      title: 'Extra Sauces',
      items: [
        ['Garlic Sauce', '250'],
        ['Tahinia Sauce', '250'],
        ['Arabian Palace Sauce Normal', '150'],
        ['Sauce', '250'],
        ['Poussin Sauce', '300'],
        ['Pepper Sauce', '300'],
        ['Mushroom Sauce', '300'],
        ['Tata Sauce', '300'],
        ['Yoghurt', '250'],
        ['Banana', '30']
      ]
    },
    {
      id: 'menu-fish',
      title: 'Fish',
      items: [
        ['Deep Fry Fish', '1,000'],
        ['Sayadiya', '1,300'],
        ['Fish Grill', '1,000'],
        ['Grilled Fish', '1,300'],
        ['Agda Samak', '1,100'],
        ['Tuna Fry', '1,000'],
        ['Fish Fingers', '1,000'],
        ['Arabian Palace Fish - Small', '1,300'],
        ['Arabian Palace Fish - Medium', '1,800'],
        ['Arabian Palace Fish - Large', '2,500']
      ]
    },
    {
      id: 'menu-barbecue',
      title: 'Barbeque',
      items: [
        ['T-Bone Steak', '1,200'],
        ['Shish Toukh', '1,100'],
        ['Pepper Steak', '1,400'],
        ['Mshikaki', '1,100'],
        ['Mombasa Mshikaki', '800'],
        ['Grilled Chicken', '1,100'],
        ['Beef Kebab', '1,150'],
        ['Chicken Kebab', '1,150'],
        ['Grilled Wings', '900'],
        ['Chicken Wings (Honey Glazed)', '1,100'],
        ['Lamb Chops', '1,400'],
        ['Mixed Grill Platter (Full)', '6,000'],
        ['Mixed Grill Platter (Half)', '3,200'],
        ['Liver Grilled', '800']
      ]
    },
    {
      id: 'menu-breakfast',
      title: 'Breakfast',
      items: [
        ['Saltah', '800'],
        ['Fahsa', '1,200'],
        ['Kebda Lever', '1,000'],
        ['Kebda with Sauce', '1,000'],
        ['Shakshuka White (Egg)', '500'],
        ['Shakshuka Red', '500'],
        ['Foul', '600'],
        ['Minced Meat Red Sauce', '800'],
        ['Minced Meat', '600'],
        ['Kidney Beans Dry', '600'],
        ['Kidney Beans with Sauce', '600'],
        ['Rashush Small', '350'],
        ['Rashush Double', '600'],
        ['Mlawah Small', '350'],
        ['Mlawah Double', '700'],
        ['Rateb Small', '400'],
        ['Rateb Double', '700'],
        ['Naan', '80/100']
      ]
    },
    {
      id: 'menu-dessert',
      title: 'Dessert',
      items: [
        ['Maasoub', '900'],
        ['Basbousa (Pre Order)', '500'],
        ['Arika', '700'],
        ['Kunafa', '700'],
        ['Kunafa Chocolate', '800'],
        ['Kunafa Ice Cream', '900'],
        ['Cheese Cream Cake', '600'],
        ['Baked Cheese Cake', '600'],
        ['Black Forest Cake', '600'],
        ['Chocolate Ganash Cake', '600'],
        ['Chocolate Mousse Cake', '600'],
        ['Zafrone Cake', '600'],
        ['Taramiso Cake', '600']
      ]
    },
    {
      id: 'menu-sides',
      title: 'Side Dishes',
      items: [
        ['Mashed Potatoes', '500'],
        ['Plain Chips', '350'],
        ['Masala Chips', '550'],
        ['Arabian Palace Chips', '1,000'],
        ['Nachos Chips', '800'],
        ['Extra Rice', '400'],
        ['Grilled Vegetables', '500'],
        ['Potato Wedges', '500'],
        ['Sauteed Potatoes', '500'],
        ['Roasted Potatoes', '500']
      ]
    },
    {
      id: 'menu-english',
      title: 'English Dishes',
      items: [
        ['Chicken 65', '900'],
        ['Oyster Beef & Chicken', '1,200'],
        ['Chicken Paneer', '1,100'],
        ['Mixed Vegetable Makhani', '800'],
        ['Chicken Cheese Burger', '1,150'],
        ['Classic Beef Burger (Double)', '1,500'],
        ['Classic Beef Burger (Triple)', '2,200'],
        ['Classic Beef Burger (Single)', '950'],
        ['Classic Beef Burger (Heart Attack)', '4,200'],
        ['Vegetarian Cheese Burger', '950'],
        ['ER Chicken Butt', '1,100'],
        ['Chicken Korma', '1,200'],
        ['Chicken Crunch Burger', '950'],
        ['Chicken Crunch Burger (Double)', '1,450'],
        ['Chicken Crunch Burger (Triple)', '2,900'],
        ['Chicken Crunch Burger (Heart Attack)', '4,000'],
        ['Beef Sizzler', '1,250'],
        ['Poussin Chicken', '2,500'],
        ['Chicken Strips', '1,150'],
        ['Shanghai Chicken', '1,200'],
        ['Chicken Stroganoff', '1,300']
      ]
    },
    {
      id: 'menu-pasta',
      title: 'Pasta',
      items: [
        ['Chicken Alfredo', '1,000'],
        ['Spaghetti Bolognese', '1,000'],
        ['Penne Arrabiata', '1,000'],
        ['Penne Carbonara (With White/Red Sauce)', '1,000']
      ]
    },
    {
      id: 'menu-sandwich',
      title: 'Sandwich',
      items: [
        ['Zinger Sandwich', '900'],
        ['Cordon Blue Sandwich', '1,000'],
        ['Fajita Sandwich (Beef/Chicken)', '700'],
        ['Shish Tauk Sandwich', '700'],
        ['Pizza Sandwich', '1,000'],
        ['Kebab Sandwich', '700'],
        ['Shawarma Sandwich (Beef)', '550'],
        ['Arabian Palace Shawarma (Beef)', '650'],
        ['Arabian Palace Shawarma (Chicken)', '650'],
        ['Shawarma Pleat (Beef)', '1,000'],
        ['Shawarma Pleat (Chicken)', '1,000']
      ]
    },
    {
      id: 'menu-cold-drinks',
      title: 'Cold Drinks',
      groups: [
        {
          title: 'Iced Coffee & Coffee-Based Drinks',
          items: [
            ['Ice Americano', '450'],
            ['Ice Latte', '450'],
            ['Ice Vanilla Latte', '450'],
            ['Ice Caramel Latte', '450'],
            ['Ice Caramel Macchiato', '450'],
            ['Ice Mocha', '450'],
            ['Ice Cappuccino', '400'],
            ['Frappuccino', '500']
          ]
        },
        {
          title: 'Milk Shake',
          note: 'Flavours: Vanilla, Caramel, Hazelnut, Chocolate, Strawberry, Raspberry, Blue Berry, Black Berry, Kiwi, Avocado, Mango, Pineapple, Caramel Coffee.',
          items: [['Milk Shake', '450', 'Vanilla Caramel Hazelnut Chocolate Strawberry Raspberry Blue Berry Black Berry Kiwi Avocado Mango Pineapple Caramel Coffee']]
        },
        {
          title: 'Smoothie',
          note: 'Flavours: Strawberry, Raspberry, Blackberry, Blueberry, Kiwi, Avocado, Mango, Passion.',
          items: [['Smoothie', '500', 'Strawberry Raspberry Blackberry Blueberry Kiwi Avocado Mango Passion']]
        },
        {
          title: 'Other Cold Drinks',
          items: [
            ['Ice Chocolate', '450'],
            ['Banana Split', '450'],
            ['Mojito', '450', 'Sunshine Strawberry Raspberry Blackberry Blueberry Kiwi Mango Pineapple Red Grape Black Grape Orange Mint Passion Watermelon']
          ],
          note: 'Mojito flavours and ingredients: Sunshine, Strawberry, Raspberry, Blackberry, Blueberry, Kiwi, Mango, Pineapple, Red Grape, Black Grape, Orange, Mint, Passion, Watermelon.'
        },
        {
          title: 'Cold Drinks - Continued',
          items: [
            ['Green Mountain', '450'],
            ['Slushes', '450'],
            ['Lemon Mint', '450'],
            ['Fakhfakhina Fruit Ice Cream', '600'],
            ['Ice Tea with Flavor', '450'],
            ['Fruit Ice Cream Plate', '600'],
            ['Araisi', '600'],
            ['Fresh Juice', '450'],
            ['Mocktail', '550'],
            ['Lian', '550'],
            ['Elaine', '550'],
            ['Water', '100/150'],
            ['Soda', '250'],
            ['Sparkling Water', '250']
          ]
        }
      ]
    },
    {
      id: 'menu-chicken',
      title: 'Chicken',
      items: [
        ['Chicken Mandi', '1,150'],
        ['Chicken Handi', '1,150'],
        ['Chicken Galab', '800'],
        ['Chicken Madhbi', '1,150'],
        ['Crunchy Chicken Wings', '1,000'],
        ['Chicken Finger', '1,000'],
        ['Chicken Nugget', '900']
      ]
    },
    {
      id: 'menu-mutton',
      title: 'Mutton',
      items: [
        ['Laham Madhbi', '1,300'],
        ['Laham Burma', '1,300'],
        ['Laham Hanidh', '1,200'],
        ['Laham Mandi', '1,300'],
        ['Laham Zurbian', '1,200'],
        ['Extra Meat', '900'],
        ['Madhghout', '1,200'],
        ['Agda Laham', '1,200'],
        ['Agda Laham Red', '1,200']
      ]
    }
  ];

  const ramadanMenuCategories = [
    {
      id: 'ramadan-cold-drinks',
      title: 'COLD DRINKS',
      groups: [
        {
          title: 'Iced Coffee & Coffee-Based Drinks',
          note: 'Frappuccino flavours: Chocolate, Caramel, Vanilla, Hazelnut, White Chocolate, Snickers, Galaxy, Brownie.',
          items: [
            ['ICE AMERICANO', '450'],
            ['ICE LATTE', '450'],
            ['ICE VANILLA LATTE', '450'],
            ['ICE CARAMEL LATTE', '450'],
            ['ICE CARAMEL MACCHIATO', '450'],
            ['ICE MOCHA', '450'],
            ['ICE CAPPUCCINO', '400'],
            ['FRAPPUCCINO', '500', 'Chocolate Caramel Vanilla Hazelnut White Chocolate Snickers Galaxy Brownie']
          ]
        },
        {
          title: 'Milk Shake',
          note: 'Flavours: Vanilla, Caramel, Hazelnut, Chocolate, Strawberry, Raspberry, Blue Berry, Black Berry, Kiwi, Avocado, Mango, Pineapple, Caramel Coffee.',
          items: [['MILK SHAKE', '450', 'Vanilla Caramel Hazelnut Chocolate Strawberry Raspberry Blue Berry Black Berry Kiwi Avocado Mango Pineapple Caramel Coffee']]
        },
        {
          title: 'Smoothie',
          note: 'Flavours: Strawberry, Raspberry, Blackberry, Blueberry, Kiwi, Avocado, Mango, Passion.',
          items: [['SMOOTHIE', '500', 'Strawberry Raspberry Blackberry Blueberry Kiwi Avocado Mango Passion']]
        },
        {
          title: 'Other Cold Drinks',
          items: [
            ['ICE CHOCOLATE', '450'],
            ['BANANA SPLIT', '450'],
            ['MOJITO', '450', 'Sunshine Strawberry Raspberry Blackberry Blueberry Kiwi Mango Pineapple Red Grape Black Grape Lemon Orange Mint Passion Watermelon']
          ],
          note: 'Mojito flavours: Sunshine, Strawberry, Raspberry, Blackberry, Blueberry, Kiwi, Mango, Pineapple, Red grape, Black grape, Lemon, Orange, Mint, Passion, Watermelon.'
        },
        {
          title: 'Green Mountain & Slushes',
          items: [
            ['GREEN MOUNTAIN', '450'],
            ['SLUSHES', '450', 'Strawberry Mango Pineapple Orange Watermelon Virgin']
          ],
          note: 'Slush flavours: Strawberry, Mango, Pineapple, Orange, Watermelon, Virgin.'
        },
        {
          title: 'Fruit Drinks & Ice Cream',
          items: [
            ['LEMON MINT', '450'],
            ['FAKHFAKHINA FRUIT ICE CREAM', '600'],
            ['ICE TEA WITH FLAVOR', '450'],
            ['FRUIT ICE CREAM PLATE', '600'],
            ['ARAISI', '600'],
            ['FRESH JUICE', '450', 'Watermelon Lemon Pineapple Passion Avocado Mango Kiwi Papaya']
          ],
          note: 'Fresh juice flavours: Watermelon, Lemon, Pineapple, Passion, Avocado, Mango, Kiwi, Papaya.'
        },
        {
          title: 'Mocktail, Lian & Elaine',
          items: [
            ['MOCKTAIL', '550', 'Kiwi strawberry Raspberry Ice Cream'],
            ['LIAN', '550', 'Kiwi strawberry Raspberry Ice Cream'],
            ['ELAINE', '550', 'Kiwi strawberry Raspberry Ice Cream']
          ],
          note: 'Flavours: Kiwi strawberry, Raspberry, Ice Cream.'
        },
        {
          title: 'Water & Soft Drinks',
          items: [
            ['WATER', '100/150'],
            ['SODA', '250'],
            ['SPARKLING WATER', '250']
          ]
        }
      ]
    },
    {
      id: 'ramadan-hot-drinks',
      title: 'HOT DRINKS',
      groups: [
        {
          title: 'Coffee & Espresso',
          note: 'Extra cappuccino flavours: Chocolate, Vanilla, Hazelnut, Caramel.',
          items: [
            ['ESPRESSO', '400'],
            ['(Small)', '300'],
            ['ESPRESSO MACCHIATO', '400'],
            ['ESPRESSO KUNBANA', '400'],
            ['AMERICANO', '400'],
            ['FLAT WHITE', '400'],
            ['LATTE', '500'],
            ['CAPPUCCINO (Large)', '600'],
            ['(Small)', '500'],
            ['EXTRA CAPPUCCINO', '550', 'Chocolate Vanilla Hazelnut Caramel']
          ]
        },
        {
          title: 'Coffee, Chocolate & Tea',
          note: 'Tea flavours: Green, Flower, Cinnamon, Earl Grey, Lemon.',
          items: [
            ['VANILLA LATTE', '500'],
            ['CARAMEL LATTE', '500'],
            ['VERY VANILLA LATTE', '500'],
            ['MOCHA', '500'],
            ['MINT MOCHA', '500'],
            ['WHITE MOCHA', '500'],
            ['HOT CHOCOLATE', '450'],
            ['CINNAMON LATTE', '450'],
            ['KARAK TEA WITH MILK', '350'],
            ['SPICY KARAK TEA', '350'],
            ['RED TEA', '200'],
            ['TEA WITH FLAVORS', '200', 'Green Flower Cinnamon Earl Grey Lemon']
          ]
        },
        {
          title: 'Other Hot Drinks',
          note: 'Menchino Kids flavours: Chocolate, Vanilla, Caramel, Hazelnut.',
          items: [
            ['DAWA TEA', '350'],
            ['HOT MILK', '300'],
            ['SIMO HOT', '400'],
            ['MENCHINO KIDS', '400', 'Chocolate Vanilla Caramel Hazelnut']
          ]
        },
        { title: 'Tea', items: [['LEMON TEA', '200']] }
      ]
    },
    {
      id: 'ramadan-salad',
      title: 'SALAD',
      items: [
        ['FATOUSH SALAD', '500'],
        ['MUTABAL', '500'],
        ['HUMUS', '500'],
        ['LABANIES TABOULA', '500'],
        ['ARABIAN PALACE SALAD', '1,400'],
        ['GREEK SALAD', '600'],
        ['CHICKEN SALAD', '700'],
        ['ARABIAN SALAD', '300'],
        ['GARDEN SALAD', '600']
      ]
    },
    {
      id: 'ramadan-sandwich',
      title: 'SANDWICH',
      items: [
        ['CLUB SANDWICH', '800'],
        ['ZINGER SANDWICH', '900'],
        ['CORDON BLUE SANDWICH', '1,000'],
        ['FAJITA SANDWICH (Beef/chicken)', '700'],
        ['SHISH TAUK SANDWICH', '700'],
        ['PIZZA SANDWICH', '1,000'],
        ['KEBDA SANDWICH', '700'],
        ['KEBAB SANDWICH', '700'],
        ['SHAWARMA SANDWICH', '550'],
        ['(Beef)', ''],
        ['(chicken)', ''],
        ['ARABIAN PALACE SHAWARMA', '650'],
        ['(Beef)', ''],
        ['(chicken)', ''],
        ['SHAWARMA PLEAT', '1,000'],
        ['(Beef)', ''],
        ['(chicken)', '']
      ]
    },
    {
      id: 'ramadan-fish',
      title: 'FISH',
      items: [
        ['DEEP FRY FISH', '1,000'],
        ['SAYADIYA', '1,300'],
        ['FISH GRILL', '1,000'],
        ['GRILLED FISH FILLET', '1,300'],
        ['AGDA SAMAK', '1,100'],
        ['TUNA FRY', '1,000'],
        ['FISH FINGERS', '1,000']
      ]
    },
    {
      id: 'ramadan-barbeque',
      title: 'BARBEQUE',
      items: [
        ['T-BONE STEAK', '1,200'],
        ['SHISH TOUHK', '1,100'],
        ['PEPPER STEAK', '1,400'],
        ['MSHIKAKI', '1,100'],
        ['GRILLED CHIKEN', '1,100'],
        ['BEEF KEBAB', '1,150'],
        ['CHIKEN KEBAB', '1,150'],
        ['GRILLED WINGS', '900'],
        ['CHIKEN WINGS (Honey Glazed)', '1,100'],
        ['LAMB CHOPS', '1,400'],
        ['MIXED GRILL PLATTER', ''],
        ['(Full)', '6,000'],
        ['(Half)', '3,200']
      ]
    },
    {
      id: 'ramadan-chicken',
      title: 'CHICKEN',
      items: [
        ['CHIKEN MANDI', '1,150'],
        ['CHIKEN HANDIH', '1,150'],
        ['CHIKEN GALABA', '800'],
        ['CHIKEN MADHBI', '1,150'],
        ['CHIKEN MADHGHOUT', '1,150'],
        ['CRUNCHY CHIKEN WINGS', '1,000'],
        ['CHIKEN FINGERS', '1,000'],
        ['CHIKEN NUGGETS', '900']
      ]
    },
    {
      id: 'ramadan-mutton',
      title: 'MUTTON',
      items: [
        ['LAHAM HANIDH', '1,200'],
        ['LAHAM MANDI', '1,300'],
        ['ZURBIAN', '1,200'],
        ['EXTRA MEAT', '900'],
        ['MADHGHOUT', '1,200'],
        ['AGDA LAHAM', '1,200'],
        ['AGDA LAHAM RED', '1,200']
      ]
    },
    {
      id: 'ramadan-iftar',
      title: 'IFTAR',
      items: [
        ['SAMOSA CHICKEN', '250'],
        ['SAMOMA BEEF', '250'],
        ['SAMOMA VEGETABLES', '250'],
        ['SAMOMA FISH', '250'],
        ['CHICKEN SPRINGROLLS', '250'],
        ['BAJIA CHILLI', '200'],
        ['BAJIA', '200'],
        ['ANJERA', '50'],
        ['CATLASE', '450'],
        ['INDIAN POTATOES', '450'],
        ['SWAHILI POTATOES', '350'],
        ['SHAFUTH', '400']
      ]
    },
    {
      id: 'ramadan-soups',
      title: 'SOUPS',
      items: [
        ['WHITE SHURBA', '400'],
        ['RED SHUBRA', '400'],
        ['VEGETABLE SHUBRA', '400'],
        ['MOROCCO SHUBRA', '500'],
        ['BROCOLLI SHUBRA', '400']
      ]
    },
    {
      id: 'ramadan-package',
      title: 'RAMADHAN PACKAGE',
      items: [
        ['ARABIAN PALACE', '1,500'],
        ['FULL PACKAGE', '2,800'],
        ['HALF PACKAGE', '1,500']
      ],
      note: 'Arabian Palace Ramadhan package: one man meal with grilled chicken, two samosas, two potatoes, and water.'
    }
  ];

      const menuCollections = { everyday: fullMenuCategories, ramadan: ramadanMenuCategories };
  let activeMenuMode = 'everyday';
  let activeCategoryId = fullMenuCategories[0].id;

  const menuNavigation = document.querySelector('.menu-category-nav');
  const menuContainer = document.querySelector('.menu-categories');
  const menuTitle = document.querySelector('#menu-title');
  const menuDescription = document.querySelector('#menu-description');
  const menuModeButtons = document.querySelectorAll('[data-menu-mode]');

  const createElement = (tagName, className, text) => {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  };

  // "COLD DRINKS" -> "Cold Drinks" (only touches all-caps text)
  const tidy = (text) => text === text.toUpperCase()
    ? text.toLowerCase().replace(/(^|[\s(\-/])([a-z])/g, (m, a, b) => a + b.toUpperCase())
    : text;

  function buildTabs() {
    const tabs = menuCollections[activeMenuMode].map((category) => {
      const tab = createElement('button', '', tidy(category.title));
      tab.type = 'button';
      tab.dataset.categoryId = category.id;
      return tab;
    });
    menuNavigation.replaceChildren(...tabs);
  }

  function renderMenu() {
    const category = menuCollections[activeMenuMode].find((c) => c.id === activeCategoryId);
    const section = createElement('section', 'menu-category');
    section.id = category.id;
    section.append(createElement('h3', 'menu-category-title', tidy(category.title)));

    const groups = category.groups || [{ items: category.items }];
    groups.forEach((group) => {
      if (group.title) section.append(createElement('h4', 'menu-subheading', group.title));
      if (group.note) section.append(createElement('p', 'menu-flavours', group.note));
      const list = createElement('ul', 'menu-items');
      group.items.forEach(([name, price]) => {
        const row = createElement('li', price ? 'menu-item' : 'menu-item menu-item-sub');
        row.append(createElement('span', 'menu-item-name', tidy(name)));
        if (price) {
          row.append(createElement('span', 'menu-item-leader'), createElement('strong', 'menu-item-price', `KSh ${price}`));
        }
        list.append(row);
      });
      section.append(list);
    });
    if (category.note) section.append(createElement('p', 'menu-flavours', category.note));

    menuContainer.replaceChildren(section);
    menuNavigation.querySelectorAll('button').forEach((tab) => {
      tab.setAttribute('aria-pressed', String(tab.dataset.categoryId === activeCategoryId));
    });
  }

  menuNavigation.addEventListener('click', (event) => {
    const tab = event.target.closest('button[data-category-id]');
    if (!tab) return;
    activeCategoryId = tab.dataset.categoryId;
    renderMenu();
  });

  menuModeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeMenuMode = button.dataset.menuMode;
      activeCategoryId = menuCollections[activeMenuMode][0].id;
      menuModeButtons.forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
      menuTitle.textContent = activeMenuMode === 'ramadan' ? 'Ramadhan Menu' : 'Arabian Palace - Full Menu';
      menuDescription.textContent = activeMenuMode === 'ramadan'
        ? 'Ramadhan favourites, iftar, and packages.'
        : 'Explore the full everyday menu.';
      buildTabs();
      renderMenu();
    });
  });

  buildTabs();
  renderMenu();
})();