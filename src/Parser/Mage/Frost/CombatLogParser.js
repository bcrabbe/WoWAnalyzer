import React from 'react';

import SuggestionsTab from 'Main/SuggestionsTab';
import Tab from 'Main/Tab';
import Talents from 'Main/Talents';

import CoreCombatLogParser from 'Parser/Core/CombatLogParser';
import DamageDone from 'Parser/Core/Modules/DamageDone';

import CastEfficiency from './Modules/Features/CastEfficiency';
import AlwaysBeCasting from './Modules/Features/AlwaysBeCasting';
import CooldownTracker from './Modules/Features/CooldownTracker';
import WintersChillTracker from './Modules/Features/WintersChill';
import BrainFreeze from './Modules/Features/BrainFreeze';
import ThermalVoid from './Modules/Features/ThermalVoid';
import IcicleTracker from './Modules/Features/IcicleTracker';

import FrozenOrb from './Modules/Cooldowns/FrozenOrb';
import IcyVeins from './Modules/Cooldowns/IcyVeins';

import ShardOfTheExodar from '../Shared/Modules/Items/ShardOfTheExodar';
import Tier20_2set from './Modules/Items/Tier20_2set';
import ZannesuJourney from './Modules/Items/ZannesuJourney';
import MagtheridonsBanishedBracers from './Modules/Items/MagtheridonsBanishedBracers';
import ShatteredFragmentsOfSindragosa from './Modules/Items/ShatteredFragmentsOfSindragosa';


class CombatLogParser extends CoreCombatLogParser {
  static specModules = {
    // Features
    castEfficiency: CastEfficiency,
    alwaysBeCasting: AlwaysBeCasting,
    cooldownTracker: CooldownTracker,
	  wintersChillTracker: WintersChillTracker,
	  brainFreeze: BrainFreeze,
	  thermalVoid: ThermalVoid,
	  icicleTracker: IcicleTracker,
    damageDone: [DamageDone, { showStatistic: true }],

	  //Cooldowns
    frozenOrb: FrozenOrb,
    icyVeins: IcyVeins,

	  //Items
	  tier20_2set: Tier20_2set,
	  shardOfTheExodar: ShardOfTheExodar,
    zannesuJourney: ZannesuJourney,
    magtheridonsBanishedBracers: MagtheridonsBanishedBracers,
    shatteredFragmentsOfSindragosa: ShatteredFragmentsOfSindragosa,

  };

  generateResults() {
    const results = super.generateResults();
    results.tabs = [
      {
        title: 'Suggestions',
        url: 'suggestions',
        render: () => (
          <SuggestionsTab issues={results.issues} />
        ),
      },
      {
        title: 'Talents',
        url: 'talents',
        render: () => (
          <Tab title="Talents">
            <Talents combatant={this.modules.combatants.selected} />
          </Tab>
        ),
      },
      ...results.tabs,
    ];

    return results;
  }
}

export default CombatLogParser;
