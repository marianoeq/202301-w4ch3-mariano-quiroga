import { MOCK_CHARACTERS } from '../../mock/mock.characters';
import { ProtoCharacters } from '../../models/proto.characters';
import { Card } from '../card/card';

export function Characters() {
  return (
    <section className="container-list">
      <ul className="characters-list row list-unstyled">
        {MOCK_CHARACTERS.map((item: ProtoCharacters) => (
          <Card
            id={item.id}
            role={item.role}
            name={item.name}
            lastname={item.lastname}
            boss={item.boss}
            edad={item.edad}
            alive={item.alive}
            img={item.img}
          ></Card>
        ))}
      </ul>
    </section>
  );
}
