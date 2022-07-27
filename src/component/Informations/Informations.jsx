import * as React from 'react';
import './information.css';
import EnjeuImg from './enjeu.svg'
import PourquoiImg from './pourquoi.svg'
import CommentImg from './comment.svg'

export function Informations() {
  return (
    <div className={'information flex flex-col items-center space-y-12'}>
      <article id={'1'}>
        <div>
          <header>
            Qu’est-ce que c’est ?
          </header>
          <div className={'content'}>
            <section className={'flex justify-center'}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/ENphUxkusBU?controls=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </section>
            <section>
              <p>
                Le transfert de connaissances est, globalement, le processus de transfert de savoir-faire d’un secteur
                d’une
                entreprise à un autre secteur. Il peut s’exprimer à la fois comme un transfert d’informations d’un groupe,
                service ou division à un autre, ou d’une personne à une autre au sein d’un même département (par. exemple,
                lors de la formation d’un nouvel employé). Le savoir qui est transmis peut prendre plusieurs formes : il
                peut
                s’agir d’un savoir-faire scientifique, technologique, organisationnel, professionnel ou pédagogique. Il
                s’agit
                d’un processus itératif et bidirectionnel qui affecte directement un individu ou une organisation de par
                l’expérience d’une autre partie. Certains autres termes sont utilisés dans le courant afin de décrire
                cette
                pratique. On entend parfois parler de façon interchangeable de mobilisation des connaissances,
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
                Le transfert de connaissances est, globalement, le processus de transfert de savoir-faire d’un secteur
                d’une
                entreprise à un autre secteur. Il peut s’exprimer à la fois comme un transfert d’informations d’un groupe,
                service ou division à un autre, ou d’une personne à une autre au sein d’un même département (par. exemple,
                lors de la formation d’un nouvel employé). Le savoir qui est transmis peut prendre plusieurs formes : il
                peut
                s’agir d’un savoir-faire scientifique, technologique, organisationnel, professionnel ou pédagogique. Il
                s’agit
                d’un processus itératif et bidirectionnel qui affecte directement un individu ou une organisation de par
                l’expérience d’une autre partie. Certains autres termes sont utilisés dans le courant afin de décrire
                cette
                pratique. On entend parfois parler de façon interchangeable de mobilisation des connaissances,
                d’application,
                d’utilisation, de translation ou de transmission de connaissances.

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
                Le transfert de connaissances est, globalement, le processus de transfert de savoir-faire d’un secteur
                d’une
                entreprise à un autre secteur. Il peut s’exprimer à la fois comme un transfert d’informations d’un groupe,
                service ou division à un autre, ou d’une personne à une autre au sein d’un même département (par. exemple,
                lors de la formation d’un nouvel employé). Le savoir qui est transmis peut prendre plusieurs formes : il
                peut
                s’agir d’un savoir-faire scientifique, technologique, organisationnel, professionnel ou pédagogique. Il
                s’agit
                d’un processus itératif et bidirectionnel qui affecte directement un individu ou une organisation de par
                l’expérience d’une autre partie. Certains autres termes sont utilisés dans le courant afin de décrire
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
                Le transfert de connaissances est, globalement, le processus de transfert de savoir-faire d’un secteur
                d’une
                entreprise à un autre secteur. Il peut s’exprimer à la fois comme un transfert d’informations d’un groupe,
                service ou division à un autre, ou d’une personne à une autre au sein d’un même département (par. exemple,
                lors de la formation d’un nouvel employé). Le savoir qui est transmis peut prendre plusieurs formes : il
                peut
                s’agir d’un savoir-faire scientifique, technologique, organisationnel, professionnel ou pédagogique. Il
                s’agit
                d’un processus itératif et bidirectionnel qui affecte directement un individu ou une organisation de par
                l’expérience d’une autre partie. Certains autres termes sont utilisés dans le courant afin de décrire
                cette
                pratique. On entend parfois parler de façon interchangeable de mobilisation des connaissances,
                d’application,
                d’utilisation, de translation ou de transmission de connaissances.

              </p>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
};
