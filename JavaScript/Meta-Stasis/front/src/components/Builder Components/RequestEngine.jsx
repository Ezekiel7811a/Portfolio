import FetchingEngine from "./FetchingEngine";
import LevelSelector from "./LevelSelector";
import PositionSelector from "./PositionSelector";
import RaritySelector from "./RaritySelector";
import StatSelector from "./StatSelector";

function RequestEngine() {
  return (
    <div className="h-full flex flex-wrap overflow-auto scrollbar-thin content-start">
      {/* <NameSelector/> */}
      <LevelSelector />
      <RaritySelector />
      <PositionSelector />
      <StatSelector />
      <FetchingEngine />
    </div>
  );
}

// Dans statSelector, revoir la conception des filtres de manières à intégrer un système de sauvegarde. 50+ stats en une liste c'est trop visuellement, il faudrait idéalement une modale qui prenne une grosse partie de la page et qui permette de visualiser en catégories les différents filtres applicables,sur mobile ça reste difficile. Il ya toujours la possibilité de mettre une barre de recherche pour trouver un filtre adéquat mais cette méthode donne moins de contrôle sur la sélection et l'enregistrement d'un filtre.

// primaire : PA PM PW PV PO

// offense : berserk mono zone distance mcrit elem dos
//ici repenser la nécessité de toutes ces catégories dans une recherche ou plutôt faire comme slummps et sélect ce qu'on veut pour comme m finale pour inclure l'élémentaire adéquatement

// defense : res, critres, dosres, parade, esquive, tacle, armureobtenue

//support : armuredonnee contrôle volonté soin

// autre : sagesse, prospection

//négatives : à lister

export default RequestEngine;
