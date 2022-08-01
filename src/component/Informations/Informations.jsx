import * as React from 'react';
import './information.css';
import EnjeuImg from './enjeu.svg'
import PourquoiImg from './pourquoi.svg'
import CommentImg from './comment.svg'
import Biblio from './biblio.svg';

export function Informations() {
  return (<div className={'information flex flex-col items-center'}>
    <article id={'1'}>
      <div>
        <header>
          Qu’est-ce que c’est ?
        </header>
        <div className={'content'}>
          <section className={'flex justify-center'}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/ENphUxkusBU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </section>
          <section>
            <p>
              Le transfert de connaissances est, globalement, le processus de transfert de savoir-faire d’un
              secteur d’une
              entreprise à un autre secteur. Il peut s’exprimer à la fois comme un transfert d’informations d’un
              groupe, service ou division à un autre, ou d’une personne à une autre au sein d’un même département
              (par.
              exemple, lors de la formation d’un nouvel employé).
            </p><br/>
            <p>
              Le savoir qui est transmis peut prendre plusieurs formes
              : il
              peut
              s’agir d’un savoir-faire scientifique, technologique, organisationnel, professionnel ou
              pédagogique. Il
              s’agit
              d’un processus itératif et bidirectionnel qui affecte directement un individu ou une organisation
              de par
              l’expérience d’une autre partie.
            </p><br/>
            <p>
              Certains autres termes sont utilisés dans le courant afin de décrire cette pratique.
              On entend parfois parler de façon interchangeable de mobilisation des connaissances,
              d’application,
              d’utilisation, de translation ou de transmission de connaissances.
            </p>
          </section>
        </div>
      </div>
    </article>
    <article id={'2'}>
      <div>
        <header>
          En quoi c’est un enjeu ?
        </header>
        <div className={'content'}>
          <section className={'flex justify-center'}>
            <img src={EnjeuImg} alt=""/>
          </section>
          <section>
            <p>
              Que ce soit dans la vie courante en entreprise ou lors d’événements plus marquants, il est
              nécessaire
              pour la santé de l’organisation d’assurer un transfert communicationnel efficace et ouvert. À
              petite
              échelle, le transfert de connaissances peut s’observer au travers de conversations, de projets,
              d’enjeux
              entre départements, ou encore lors de l’arrivée d’un nouvel employé qu’on doit former. À plus
              grande
              échelle, on peut facilement imaginer le besoin d’avoir un bon processus de transfert de
              connaissances
              lors d’événements comme des fusions ou des acquisitions d’entreprises où le transfert est vital à
              la
              prospérité future et la santé organisationnelle de l’entreprise.
            </p><br/>
            <p>
              Les connaissances sont un enjeu pour les organisations au même titre que les ressources humaines,
              matérielles et financières : elles contribuent à réaliser la mission de l’organisation.Il est
              essentiel
              de savoir qui sait quoi, qui a besoin de savoir quoi et comment transférer ces connaissances,
              surtout
              lorsque la valeur d'une entreprise est constituée en grande partie d'informations. Ne pas être à
              l’affût
              des nouvelles connaissances et ne pas les utiliser équivaut souvent à une perte financière de par
              le
              manque d’optimisation de l’utilisation des ressources de l’entreprise.
            </p><br/>
            <p>
              De plus, un bon processus de transfert des connaissances contribue grandement à la performance et
              productivité de l’organisation et de ses employés.
            </p>
          </section>

        </div>
      </div>
    </article>
    <article id={'3'}>
      <div>
        <header>
          Pourquoi le faire ?
        </header>
        <div className={'content'}>
          <section className={'flex justify-center'}>
            <img src={PourquoiImg} alt=""/>
          </section>
          <section>
            <p>
              Le transfert de connaissances est, globalement, le processus de transfert de savoir-faire d’un
              secteur
              d’une
              entreprise à un autre secteur. Il peut s’exprimer à la fois comme un transfert d’informations d’un
              groupe,
              service ou division à un autre, ou d’une personne à une autre au sein d’un même département (par.
              exemple,
              lors de la formation d’un nouvel employé). Le savoir qui est transmis peut prendre plusieurs formes
              : il
              peut
              s’agir d’un savoir-faire scientifique, technologique, organisationnel, professionnel ou
              pédagogique. Il
              s’agit
              d’un processus itératif et bidirectionnel qui affecte directement un individu ou une organisation
              de par
              l’expérience d’une autre partie. Certains autres termes sont utilisés dans le courant afin de
              décrire
              cette
              pratique. On entend parfois parler de façon interchangeable de mobilisation des connaissances,
              d’application,
              d’utilisation, de translation ou de transmission de connaissances.

            </p>
          </section>
        </div>
      </div>
    </article>
    <article id={'4'}>
      <div>
        <header>
          Comment le faire ?
        </header>
        <div className={'content'}>
          <section className={'flex justify-center'}>
            <img src={CommentImg} alt=""/>
          </section>
          <section>
            <p>
              Le transfert de connaissances est, globalement, le processus de transfert de savoir-faire d’un
              secteur
              d’une
              entreprise à un autre secteur. Il peut s’exprimer à la fois comme un transfert d’informations d’un
              groupe,
              service ou division à un autre, ou d’une personne à une autre au sein d’un même département (par.
              exemple,
              lors de la formation d’un nouvel employé). Le savoir qui est transmis peut prendre plusieurs formes
              : il
              peut
              s’agir d’un savoir-faire scientifique, technologique, organisationnel, professionnel ou
              pédagogique. Il
              s’agit
              d’un processus itératif et bidirectionnel qui affecte directement un individu ou une organisation
              de par
              l’expérience d’une autre partie. Certains autres termes sont utilisés dans le courant afin de
              décrire
              cette
              pratique. On entend parfois parler de façon interchangeable de mobilisation des connaissances,
              d’application,
              d’utilisation, de translation ou de transmission de connaissances.

            </p>
          </section>
        </div>
      </div>
    </article>
    <article id={'5'} className={'biblio'}>
      <div>
        <header>
          Bibliographie
        </header>
        <div className={'content'}>
          <section className={'flex justify-center'}>
            <img src={Biblio} alt=""/>
          </section>
          <section>
            <b>Qu’est-ce que c’est?</b>
            <ul>
              <li>SA. « Le transfert de connsaissances pour avoir de l'impact !», INSPQ, en ligne : <a href="https://www.youtube.com/watch?v=ENphUxkusBU">Lien</a> (Consulté le 1 août 2022)</li>
              <li>SA. « Lexique sur la transfert de connaissances en éducation », CTREQ, 2017, [PDF], p. 51 : <a href="https://www.ctreq.qc.ca/tout-savoir-sur-le-transfert-de-connaissances-en-education/">Lien</a> (Consulté le 1 août 2022)</li>
            </ul>
            <br/>
            <b>En quoi c’est un enjeu ?</b>
            <ul>
              <li>S.A. «Knowledge transfer», peopleHum, s.d., en ligne : <a
                href="https://www.peoplehum.com/glossary/knowledge-transfer">Lien</a> (Consulté le 29 juillet
                2022)
              </li>
              <li>PRESSEAU, Annie et Marianne FRENAY. «Le transfert des apprentissages Comprendre pour mieux
                intervenir», 2004, p.7-48.
              </li>
              <li>CANCIALOSI, Chris. «6 Key Steps to Influencing Effective Knowledge Transfer in Your Business»,
                Forbes, 8 décembre 2014, en ligne : <a
                  href="https://www.forbes.com/sites/chriscancialosi/2014/12/08/6-key-steps-to-influencing-effective-knowledge-transfer-in-your-business/?sh=6eebf7585fe6">Lien</a> (Consulté
                le 29 juillet 2022).
              </li>
            </ul>

            <br/>
            <b>Pourquoi le faire?</b>
            <ul>
              <li>DEMERS, Marie. «S’investir en transfert DE CONNAISSANCES», Québec en forme, été 2013 : <a
                href="https://bel.uqtr.ca/id/eprint/1903/1/Transfert_de_connaissances.pdf">Lien</a>
              </li>
            </ul>

            <br/>
            <b>Comment le faire?</b>
            <ul>
              <li> : <a
                href="x">Lien</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  </div>);
};
