import { For } from "solid-js";
import {
  selectedStats,
  setSelectedStats,
  selectedStatsStore,
} from "./BuilderStore";

// gestion des statistiques sélectionnables dans le filtre de requête d'objets. On part un design avec 5 à 6 dizaines de stats différentes, décider de si l'on veut qu'eelles soient accessibles par scroll ou par panneaux développables par catégories. On veut pouvoir filtrer par une valeur minimale et par une valeur maximale, on veut optionnellement pouvoir reset la valeur en un clic plutôt que d'avoir à cliquer chaque champ et faire backspace. On veut de plus pouvoir scroll sur ces champs de manière à changer le compte de 1 en 1, en appuyant sur shift de 10 en 10, et en appuyant sur contrôle de 100 en 100.
//Pour l'instant générer l'ensemble des sélecteurs avec un for each à partir de la liste des stats générées en store.
//le signal sur store ne semble pas fonctionner quand celui-ci est déjà rempli, il semblerait que la méthode createSignal assigne un signal à chaque entrée à l'append ?

function StatSelector() {
  const handleMinInput = (signalMin, signalMax) => {
    // console.log(e.currentTarget);
    // (!isNaN(e.currentTarget.value) && Math.sign(e.currentTarget.value)) ||
    // e.currentTarget.value == 0
    //   ? (signalMin = e.currentTarget.value)
    //   : (e.currentTarget.value = signalMin);
    // parseInt(e.currentTarget.value) > parseInt(maxLevel())
    //   ? setMinLevel(maxLevel())
    //   : (e.currentTarget.value = minLevel());
  };

  // const handleMinLevel = (e) => {
  // parseInt(e.currentTarget.value) == 0
  //     ? setMinLevel()
  //     : e.currentTarget.value = minLevel()
  // };

  // const handleMinLevelFocus = (e) => {
  //   e.currentTarget.value.length == 0
  //     ? setMinLevel(0)
  //     : (e.currentTarget.value = minLevel());

  //   e.currentTarget.value = e.currentTarget.value * 1;
  // };

  const handleMaxInput = (signalMax, signalMin) => {
    // console.log(e.currentTarget);
    // (!isNaN(e.currentTarget.value) && Math.sign(e.currentTarget.value)) ||
    // e.currentTarget.value == 0
    //   ? (signalMax = e.currentTarget.value)
    //   : (e.currentTarget.value = signalMax);
    // parseInt(e.currentTarget.value) > parseInt(maxLevel())
    //   ? setMinLevel(maxLevel())
    //   : (e.currentTarget.value = minLevel());
  };

  // const handleMaxLevel = (e, signalMin, signalMax) => {
  // parseInt(e.currentTarget.value) == 0
  //     ? setMaxLevel()
  //     : e.currentTarget.value = maxLevel()
  // };

  // const handleMaxLevelFocus = (e) => {
  //   e.currentTarget.value.length == 0
  //     ? setMaxLevel(0)
  //     : (e.currentTarget.value = maxLevel());

  //   e.currentTarget.value = e.currentTarget.value * 1;
  // };

  return (
    <div class="flex flex-col h-full">
      <For each={selectedStats()}>
        {(stat) => (
          <div class="flex box-border h-full justify-evenly" stat={stat.stat}>
            <span class="text-white">{stat.stat}</span>
            <input
              class="w-8"
              type="text"
              placeholder="min"
              value={stat.min}
              onInput={handleMinInput(stat.min, stat.max)}
            />
            <input
              type="text"
              class="w-8"
              placeholder="max"
              value={stat.max}
              onInput={handleMaxInput(stat.max, stat.min)}
            />
          </div>
        )}
      </For>
    </div>
  );
}
export default StatSelector;
