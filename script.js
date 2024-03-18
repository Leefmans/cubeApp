// actual money, extra per click, easy view for display
let money = 0;
let clickCount = 0;
let prepClickCount = 0;
let boughtUpgrades = 0;
let fTimeMonkeyTown = 0;
let aHa = 0;
let tokens = 0;
let easyView = 0;
let monkey = 0;
let banana = 0;
let tree = 0;
let forest = 0;
let monkeyTown = 0;
let xPosMap = -504;
let yPosMap = -204;
let on1 = 0;
let to1 = 10;
let level1 = 0;

// money display, click button, upgrades button
const moneyCount = document.getElementById('money-count');
const clickButton = document.getElementById('click-button');
const upgradesButton = document.getElementById('upgrades-menu-button');
const closeUpgrades = document.getElementById('upgrades-menu-closer');
const specialUpgradeInfo = document.getElementById('special-upgrade-info');
const specialUpgradeBuy = document.getElementById('special-upgrade-buy');
const notEnoughCloser = document.getElementById('ok');
const purchaseDoneCloser = document.getElementById('ok2');
const purchaseInfo = document.getElementById('purchase-info');
const monkeyTownButton = document.getElementById('monkey-town-button');
const map = document.getElementById('map');
const pS = document.getElementById('press-start');
const bG = document.getElementById('bG');
const exit = document.getElementById('exit');
const overviewButton = document.getElementById('overview-button');
const closeOverviewButton = document.getElementById('close-overview-button');
const goHouse1 = document.getElementById('goHouse1');
const cC = document.getElementById('clickCount');
const noMoney = document.getElementById('no-money');
const range1 = document.getElementById('range1');
const buy1 = document.getElementById('buy1');

function start() {
  updateEasyView();
  updateEasyViewCC();
  updateEasyViewMT();
  checkMonkeyTownAvailable();
  init();
  document.getElementById('home').style.visibility = 'visible';
  document.getElementById('loading').style.visibility = 'hidden';
}

// easyView generater
function updateEasyView() {
  if (money < 1000) {
    easyView = money;
    moneyCount.innerText = `$${easyView}`;
  }
  if (money >= 1000) {
    easyView = money;
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    moneyCount.innerText = `$${easyView}K`;
  }
  if (money >= 1000000) {
    easyView = money / 1000;
    easyView = Math.trunc(easyView);
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    moneyCount.innerText = `$${easyView}M`;
  }
  if (money >= 1000000000) {
    easyView = money / 1000000;
    easyView = Math.trunc(easyView);
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    moneyCount.innerText = `$${easyView}B`;
  }
  if (money >= 1000000000000) {
    easyView = money / 1000000000;
    easyView = Math.trunc(easyView);
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    moneyCount.innerText = `$${easyView}T`;
  }
  if (money >= 1000000000000000) {
    easyView = money / 1000000000000;
    easyView = Math.trunc(easyView);
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    moneyCount.innerText = `$${easyView}AA`;
  }
  if (money >= 1000000000000000000) {
    easyView = money / 1000000000000000;
    easyView = Math.trunc(easyView);
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    moneyCount.innerText = `$${easyView}AB`;
  }
  if (money >= 1000000000000000000000) {
    easyView = money / 1000000000000000000;
    easyView = Math.trunc(easyView);
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    moneyCount.innerText = `$${easyView}AC`;
  }
  if (money >= 1000000000000000000000000) {
    easyView = money / 1000000000000000000000;
    easyView = Math.trunc(easyView);
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    moneyCount.innerText = `$${easyView}AD`;
  }
  if (money >= 1000000000000000000000000000) {
    easyView = money / 1000000000000000000000000;
    easyView = Math.trunc(easyView);
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    moneyCount.innerText = `$${easyView}AE`;
  }
  if (money >= 1000000000000000000000000000000) {
    easyView = money / 1000000000000000000000000000;
    easyView = Math.trunc(easyView);
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    moneyCount.innerText = `$${easyView}AF`;
  }
  if (money >= 1000000000000000000000000000000000) {
    easyView = money / 1000000000000000000000000000000;
    easyView = Math.trunc(easyView);
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    moneyCount.innerText = `$${easyView}AG`;
  }
}

function updateEasyViewCC() {
  if (clickCount < 1000) {
    easyView = clickCount;
    cC.innerText = `${easyView}`;
  }
  if (clickCount >= 1000) {
    easyView = clickCount;
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    cC.innerText = `${easyView}K`;
  }
  if (clickCount >= 1000000) {
    easyView = clickCount / 1000;
    easyView = Math.trunc(easyView);
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    cC.innerText = `${easyView}M`;
  }
  if (clickCount >= 1000000000) {
    easyView = clickCount / 1000000;
    easyView = Math.trunc(easyView);
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    cC.innerText = `${easyView}B`;
  }
  if (clickCount >= 1000000000000) {
    easyView = clickCount / 1000000000;
    easyView = Math.trunc(easyView);
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    cC.innerText = `${easyView}T`;
  }
  if (clickCount >= 1000000000000000) {
    easyView = clickCount / 1000000000000;
    easyView = Math.trunc(easyView);
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    cC.innerText = `${easyView}AA`;
  }
  if (clickCount >= 1000000000000000000) {
    easyView = clickCount / 1000000000000000;
    easyView = Math.trunc(easyView);
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    cC.innerText = `${easyView}AB`;
  }
  if (clickCount >= 1000000000000000000000) {
    easyView = clickCount / 1000000000000000000;
    easyView = Math.trunc(easyView);
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    cC.innerText = `${easyView}AC`;
  }
  if (clickCount >= 1000000000000000000000000) {
    easyView = clickCount / 1000000000000000000000;
    easyView = Math.trunc(easyView);
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    cC.innerText = `${easyView}AD`;
  }
  if (clickCount >= 1000000000000000000000000000) {
    easyView = clickCount / 1000000000000000000000000;
    easyView = Math.trunc(easyView);
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    cC.innerText = `${easyView}AE`;
  }
  if (clickCount >= 1000000000000000000000000000000) {
    easyView = clickCount / 1000000000000000000000000000;
    easyView = Math.trunc(easyView);
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    cC.innerText = `${easyView}AF`;
  }
  if (clickCount >= 1000000000000000000000000000000000) {
    easyView = clickCount / 1000000000000000000000000000000;
    easyView = Math.trunc(easyView);
    if (easyView % 10 == 0) {
      easyView += 1;
    }
    easyView = easyView / 1000;
    cC.innerText = `${easyView}AG`;
  }
}

function updateEasyViewMT() {
  prepClickCount = Math.trunc(clickCount / 1000);
  tokens = prepClickCount - boughtUpgrades;
  document.getElementById('tokenCount').innerText = `${tokens}`;
}

// special upgrade info
function updateAvailableSpecialUpgrade() {
  if (monkey <= 0) {
    specialUpgradeInfo.innerText = 'Buy a monkey! $500, +$1 / click';
  } //monkey
  if (monkey >= 1) {
    specialUpgradeInfo.innerText = 'Buy a banana! $2K, +$2 / click';
  } //banana
  if (banana >= 1) {
    specialUpgradeInfo.innerText = 'Buy a tree! $6K, +$4 / click';
  } //tree
  if (tree >= 1) {
    specialUpgradeInfo.innerText = 'Buy a forest! $18K, +$10 / click';
  } //forest
  if (forest >= 1) {
    specialUpgradeInfo.innerText = 'Buy Monkey Town! $40K, +$22 / click';
  } //Monkey Town
  if (monkeyTown >= 1) {
    specialUpgradeInfo.innerText = 'You bought them all!';
     document.getElementById('special-upgrade-buy').style.visibility = 'hidden';
     document.getElementById('special-upgrade-info').style.bottom = '20%';
     document.getElementById('special-upgrade-screen').style.opacity = '0.5';
  } //all bought
}

// special upgrade buy
function buySpecialUpgrade() {
  if (monkey <= 0) {
    if (money >= 500) {
      money -= 500;
      monkey = 1;
      updateEasyView()
      updateAvailableSpecialUpgrade()
      document.getElementById('purchase-done').style.visibility = 'visible';
      purchaseInfo.innerText = `You bought a monkey, your income per click is now: $${1 + monkey * 1}`;
    }
    else {
      document.getElementById('not-enough').style.visibility = 'visible';
    }
  } //monkey
  if (monkey >= 1) {
    if (banana <= 0) {
      if (money >= 2000) {
       money -= 2000;
       banana = 1;
       updateEasyView()
       updateAvailableSpecialUpgrade()
       document.getElementById('purchase-done').style.visibility = 'visible';
       purchaseInfo.innerText = `You bought a banana, your income per click is now: $${1 + monkey * 1 + banana * 2}`;
      }
    else {
      document.getElementById('not-enough').style.visibility = 'visible';
      }
    }
  } //banana
  if (banana >= 1) {
    if (tree <= 0) {
     if (money >= 6000) {
        money -= 6000;
        tree = 1;
        updateEasyView()
        updateAvailableSpecialUpgrade()
        document.getElementById('purchase-done').style.visibility = 'visible';
        purchaseInfo.innerText = `You bought a tree, your income per click is now: $${1 + monkey * 1 + banana * 2 + tree * 4}`;
    }
      else {
       document.getElementById('not-enough').style.visibility = 'visible';
      }
    }
  } //tree
  if (tree >= 1) {
    if (forest <= 0) {
     if (money >= 18000) {
        money -= 18000;
        forest = 1;
        updateEasyView()
        updateAvailableSpecialUpgrade()
        document.getElementById('purchase-done').style.visibility = 'visible';
        purchaseInfo.innerText = `You bought a forest, your income per click is now: $${1 + monkey * 1 + banana * 2 + tree * 4 + forest * 10}`;
    }
      else {
       document.getElementById('not-enough').style.visibility = 'visible';
      }
    }
  } //forest
  if (forest >= 1) {
    if (monkeyTown <= 0) {
     if (money >= 40000) {
        money -= 40000;
        monkeyTown = 1;
        updateEasyView()
        updateAvailableSpecialUpgrade()
        document.getElementById('purchase-done').style.visibility = 'visible';
        purchaseInfo.innerText = `You bought Monkey Town, your income per click is now: $${1 + monkey * 1 + banana * 2 + tree * 4 + forest * 10 + monkeyTown * 22}`;
    }
      else {
       document.getElementById('not-enough').style.visibility = 'visible';
      }
    }
  } //Monkey Town
}

function handleCloseNotEnough () {
  if (window.getComputedStyle(document.getElementById('upgrades-screen')).visibility === 'hidden') {
    document.getElementById('home').style.visibility = 'visible';
  }
  if (aHa >= 1) {
    aHa = 0;
    handleLoadMonkeyTown();
  }
    document.getElementById('not-enough').style.visibility = 'hidden';
}

function handleClosePurchaseDone () {
   document.getElementById('purchase-done').style.visibility = 'hidden';
   document.getElementById('not-enough').style.visibility = 'hidden';
  
}

// when click happens
function handleClickButton() {
  money += 1 + monkey * 1 + banana * 2 + tree * 4 + forest * 10;
  clickCount += 1;
  updateEasyView();
  updateEasyViewCC();
  updateEasyViewMT();
  updateAvailableSpecialUpgrade();
}

// upgrades menu opener and closer
function handleClickUpgradeButton() {
  checkMonkeyTownAvailable();
  document.getElementById('upgrades-screen').style.visibility = 'visible';
  document.getElementById('home').style.visibility = 'hidden';
  document.getElementById('upgrade-token-section').style.visibility = 'hidden';
}

function handleClickUpgradesCloser() {
  document.getElementById('upgrades-screen').style.visibility = 'hidden';
  document.getElementById('home').style.visibility = 'visible';
  checkMonkeyTownAvailable();
}

 function init() {
  // Start saving game data every 2 seconds
  setInterval(saveGameData, 2000);
}

 // Initialize the database
let db = openDatabase('gameData', '1.0', 'Game Data', 2 * 1024 * 1024);
db.transaction(function(tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS gameData (id INTEGER PRIMARY KEY, data TEXT)');
});

// Define a function to save game data to the database
function saveGameData() {
  let gameData = {
    money: money,
	monkey: monkey,
	banana: banana,
	tree: tree,
	forest: forest,
	monkeyTown: monkeyTown,
	clickCount: clickCount,
	fTimeMonkeyTown: fTimeMonkeyTown,
	boughtUpgrades: boughtUpgrades
    // Add any other variables you want to save here
  };

  db.transaction(function(tx) {
    tx.executeSql('INSERT INTO gameData (data) VALUES (?)', [JSON.stringify(gameData)], function(tx, res) {
      console.log('Game data saved successfully');
    }, function(tx, err) {
      console.error('Failed to save game data', err.message);
    });
  });
}

// Define a function to load game data from the database
function loadGameData() {
  db.transaction(function(tx) {
    tx.executeSql('SELECT * FROM gameData ORDER BY id DESC LIMIT 1', [], function(tx, res) {
      if (res.rows.length > 0) {
        // Game data was found, load it into the game
        let savedData = JSON.parse(res.rows.item(0).data);
        money = savedData.money;
		monkey = savedData.monkey;
		banana = savedData.banana;
		tree = savedData.tree;
		forest = savedData.forest;
		monkeyTown = savedData.monkeyTown;
		clickCount = savedData.clickCount;
		fTimeMonkeyTown = savedData.fTimeMonkeyTown;
		boughtUpgrades = savedData.boughtUpgrades;
        // Load any other variables you saved here
        console.log('Game data loaded successfully');
      } else {
        // No game data was found, start a new game
        // ...initialize new game data...
        console.log('No saved game data found, starting new game');
      }
    }, function(tx, err) {
      console.error('Failed to load game data', err.message);
    });
  });
}

loadGameData();

function checkMonkeyTownAvailable() {
  if (monkeyTown >= 1) {
    monkeyTownButton.style.opacity = '1';
    document.getElementById('upgrade-token-section').style.visibility = 'visible';
  }
}

function handleLoadMonkeyTown() {
  if (monkeyTown >= 1) {
  document.getElementById('monkey-town').style.visibility = 'visible';
  document.getElementById('monkey-town').style.opacity = '0.1';
  setTimeout(function() {
  document.getElementById('monkey-town').style.opacity = '0.2';
  setTimeout(function() {
  document.getElementById('monkey-town').style.opacity = '0.3';
  setTimeout(function() {
  document.getElementById('monkey-town').style.opacity = '0.4';
  setTimeout(function() {
  document.getElementById('monkey-town').style.opacity = '0.5';
  setTimeout(function() {
  document.getElementById('monkey-town').style.opacity = '0.6';
  setTimeout(function() {
  document.getElementById('monkey-town').style.opacity = '0.7';
  setTimeout(function() {
  document.getElementById('monkey-town').style.opacity = '0.8';
  setTimeout(function() {
  document.getElementById('monkey-town').style.opacity = '0.9';
  setTimeout(function() {
  document.getElementById('monkey-town').style.opacity = '1';
  }, 90);
  }, 90);
  }, 90);
  }, 90);
  }, 90);
  }, 90);
  }, 90);
  }, 90);
  }, 90);
  if (fTimeMonkeyTown <= 0) {
      document.getElementById('not-enough').style.visibility = 'visible';
      document.getElementById('monkey-town').style.visibility = 'hidden';
    noMoney.innerText = `Hello, welcome to Monkey Town. Monkey Town is a town of monkeys dedicaded to giving you clicks when you're offline. the houses all have a level and an amount of upgrades necessary to get to a new level, each level gives 1 extra click per minute. You can buy each upgrade with 1 Monkey Token, you get that for every 1000 clicks you do "yourself"!`;
    noMoney.style.fontSize = '25px';
      fTimeMonkeyTown = 1;
      aHa = 1;
    }
  }
  else {
    document.getElementById('not-enough').style.visibility = 'visible';
    document.getElementById('home').style.visibility = 'hidden';
    noMoney.innerText = `First unlock the fifth Special Upgrade called 'Monkey Town'`;
    noMoney.style.fontSize = '55px';
  }
}

function exitMonkeyTown() {
  document.getElementById('monkey-town').style.opacity = '0.9';
  setTimeout(function() {
  document.getElementById('monkey-town').style.opacity = '0.8';
  setTimeout(function() {
  document.getElementById('monkey-town').style.opacity = '0.7';
  setTimeout(function() {
  document.getElementById('monkey-town').style.opacity = '0.6';
  setTimeout(function() {
  document.getElementById('monkey-town').style.opacity = '0.5';
  setTimeout(function() {
  document.getElementById('monkey-town').style.opacity = '0.4';
  setTimeout(function() {
  document.getElementById('monkey-town').style.opacity = '0.3';
  setTimeout(function() {
  document.getElementById('monkey-town').style.opacity = '0.2';
  setTimeout(function() {
  document.getElementById('monkey-town').style.opacity = '0.1';
  setTimeout(function() {
  document.getElementById('monkey-town').style.opacity = '0';
  document.getElementById('monkey-town').style.visibility = 'hidden';
  }, 90);
  }, 90);
  }, 90);
  }, 90);
  }, 90);
  }, 90);
  }, 90);
  }, 90);
  }, 90);
}

function handleLoadOverview() {
  document.getElementById('overview').style.visibility = 'visible';
  document.getElementById('overview-button').style.visibility = 'hidden';
  document.getElementById('exit').style.visibility = 'hidden';
}

function handleCloseOverview() {
  document.getElementById('overview').style.visibility = 'hidden';
  document.getElementById('overview-button').style.visibility = 'visible';
  document.getElementById('exit').style.visibility = 'visible';
}

function handleOpenHouse1() {
  document.getElementById('overview').style.visibility = 'hidden';
  document.getElementById('OVHouse1').style.visibility = 'visible';
  bG.style.left = '-270px';
  bG.style.top = '-100px';
  xPosMap = -270;
  yPosMap = -100;
  range1.innerText = `${on1}/${to1}`
  if (level1 >= 6) {
    range1.style.visibility = 'hidden';
    buy1.style.visibility = 'hidden';
  }
}

function buyUHouse1() {
  if (tokens >= 1) {
  tokens -= 1;
  on1 += 1;
  range1.innerText = `${on1}/${to1}`
  if (on1 >= to1) {
    level1 += 1;
    on1 = 0;
    if (level1 >= 1) {
      to1 = 40;
      range1.innerText = `${on1}/${to1}`
    }
    if (level1 >= 2) {
      to1 = 75;
      range1.innerText = `${on1}/${to1}`
    }
    if (level1 >= 3) {
      to1 = 100;
      range1.innerText = `${on1}/${to1}`
    }
    if (level1 >= 4) {
      to1 = 200;
      range1.innerText = `${on1}/${to1}`
    }
    if (level1 >= 5) {
      to1 = 500;
      range1.innerText = `${on1}/${to1}`
    }
    if (level1 >= 6) {
      range1.style.visibility = 'hidden';
      buy1.style.visibility = 'hidden';
    }
  }
  }
}

function toRight () {
  if (xPosMap > -1100) {
    bG.style.left = `${xPosMap - 12}px`;
    xPosMap -= 12;
  }
}

function toLeft () {
  if (xPosMap < 0) {
    bG.style.left = `${xPosMap + 12}px`;
    xPosMap += 12;
  }
}

function toDown () {
  if (yPosMap > -670) {
    bG.style.top = `${yPosMap - 12}px`;
    yPosMap -= 12;
  }
}

function toUp () {
  if (yPosMap < 0) {
    bG.style.top = `${yPosMap + 12}px`;
    yPosMap += 12;
  }
}

function checkKey(e) {
  if (window.getComputedStyle(document.getElementById('overview')).visibility === 'hidden') {
	  if (window.getComputedStyle(document.getElementById('OVHouse1')).visibility === 'hidden') {
    e = e || window.event;

    if (e.keyCode == '38') {
        toUp();
    }
    if (e.keyCode == '40') {
        toDown();
    }
    if (e.keyCode == '37') {
       toLeft();
    }
    if (e.keyCode == '39') {
       toRight();
    }
  }
  }
}

// looks for clicks
clickButton.addEventListener('click', handleClickButton);
upgradesButton.addEventListener('click', handleClickUpgradeButton);
closeUpgrades.addEventListener('click', handleClickUpgradesCloser);
upgradesButton.addEventListener('click', updateAvailableSpecialUpgrade);
specialUpgradeBuy.addEventListener('click', buySpecialUpgrade);
notEnoughCloser.addEventListener('click', handleCloseNotEnough);
purchaseDoneCloser.addEventListener('click', handleClosePurchaseDone);
document.onkeydown = checkKey;
monkeyTownButton.addEventListener('click', handleLoadMonkeyTown);
pS.addEventListener('click', start);
exit.addEventListener('click', exitMonkeyTown);
overviewButton.addEventListener('click', handleLoadOverview);
closeOverviewButton.addEventListener('click', handleCloseOverview);
goHouse1.addEventListener('click', handleOpenHouse1);
buy1.addEventListener('click', buyUHouse1);