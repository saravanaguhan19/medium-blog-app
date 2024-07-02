import { useNavigate, useParams } from "react-router-dom";

function BlogDetails({ blogs }) {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);

  const { id } = useParams();

  const selectedBlog = blogs.find((blog) => blog.id == id);
  console.log(selectedBlog);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <button
          className="bg-black text-white  w-36 h-12 rounded-xl "
          type="button"
          onClick={handleClick}
        >
          Go Back ⏪
        </button>

        <div className="text-6xl mb-4">{selectedBlog.title}</div>
        <div className="text-4xl mb-4">{selectedBlog.content}</div>
        <div className="flex w-[450px] justify-between mb-4">
          <div className="text-2xl">written by {selectedBlog.createdBy}</div>.
          <div className="text-2xl">create at {selectedBlog.createAt}</div>
        </div>
        <div className="max-w-[850px] text-2xl font-thin">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
          praesentium fugiat maiores. Alias ipsum nesciunt dolorem! Unde itaque
          accusantium quas, doloribus ipsam eum suscipit tempore. Illo
          voluptatem necessitatibus perspiciatis, laudantium quia tempora cum
          veniam, asperiores nulla quis nemo, reiciendis dignissimos ab a
          deleniti consequatur! Voluptatem odio debitis voluptatibus quos maxime
          saepe illo delectus itaque iste. Nobis quam dolor sint debitis dolorem
          iusto ad nulla molestias voluptate sunt repellat quod praesentium
          laudantium facere, ab blanditiis unde error! Eius, quidem. Dolores
          facilis nemo amet cupiditate, nihil aspernatur libero nesciunt saepe,
          unde, eius nulla iure vel nostrum eum commodi soluta culpa? Iste quasi
          voluptates asperiores ab fugiat obcaecati repudiandae sit qui fugit
          repellendus similique exercitationem ea laborum accusantium sunt
          deserunt necessitatibus ipsum vero, odit nam nisi dolorem! Cumque
          culpa doloremque animi eos. Maxime rem veritatis eius nisi architecto
          aliquid consequatur ad, nesciunt facere incidunt porro, fugiat animi
          beatae quis blanditiis quos soluta doloremque, cumque enim earum hic
          doloribus quasi! Tempore quasi accusamus quaerat, iste reiciendis
          reprehenderit repellat minus saepe maxime nisi est voluptate
          consequatur fugit, eaque dignissimos dolorem deserunt esse laudantium
          aut eos molestiae facilis earum dolores! Sequi, totam dolores deserunt
          debitis quos maiores! Dolor tempore necessitatibus commodi dolore
          libero molestias, culpa quaerat optio eum doloremque ut impedit saepe.
          Quaerat vel quasi adipisci veniam fuga ad aspernatur omnis
          perspiciatis sequi esse, quis officiis soluta dolores officia beatae
          necessitatibus at, impedit maxime iusto sit amet, eaque non explicabo?
          Laborum, exercitationem eos! Aperiam suscipit amet obcaecati at,
          distinctio sit corporis, tenetur ullam omnis molestiae mollitia
          eligendi animi autem quibusdam, delectus officia deleniti nulla
          inventore voluptates nihil fugit quisquam eveniet aspernatur
          recusandae? Impedit corporis non, doloribus autem sed ipsa omnis,
          culpa, a excepturi odio labore ipsum! Assumenda voluptatum quidem
          dolorum reprehenderit nobis nisi. Fuga porro quasi veniam unde vero
          harum quos corporis id ipsa dolorem velit architecto ullam laboriosam
          illo consequatur nam, odio, natus soluta voluptas sit veritatis
          doloribus! Aspernatur, non quibusdam, vero in quaerat nam vitae qui
          temporibus excepturi corrupti dolores nisi nobis, aliquam quidem
          dolorum provident pariatur nesciunt quos itaque adipisci. Assumenda
          veritatis quaerat, debitis rerum nisi doloribus. Assumenda quia ipsum
          nam, rerum necessitatibus culpa autem fuga, nobis vitae at libero sed
          fugit? Velit, officiis! Quos, tenetur. Repellat nam eaque, optio,
          molestias nemo quam alias recusandae tenetur nisi dolorum sit ducimus
          voluptates maiores eligendi laudantium laboriosam explicabo cum
          sapiente dignissimos adipisci inventore! Rem mollitia ratione
          molestiae quas cumque. At illum accusamus impedit suscipit id repellat
          temporibus obcaecati alias saepe, cumque dolore ullam fugiat
          perspiciatis vitae error voluptatem optio harum laudantium atque
          voluptatibus veritatis commodi, earum laborum ipsum. Voluptate,
          aliquam. Dolorum tenetur distinctio aperiam dolor doloremque omnis
          praesentium deleniti? Iure quasi cumque consequatur quis odit iste
          dicta veniam eaque ipsum magni vel voluptates minima, itaque qui eos
          reprehenderit minus, quam numquam, debitis sed delectus fuga. Earum
          accusantium deleniti maxime, alias tenetur repudiandae rerum odit
          praesentium? Inventore a et quisquam omnis libero animi consequatur
          repellat atque ut voluptates nobis impedit itaque pariatur aliquam,
          iure tempore? Est voluptas eaque consequatur nobis maiores ea. Fuga
          sed explicabo officia eius sit quae porro qui veniam minima asperiores
          id unde consequatur odit, necessitatibus in quos, doloremque aperiam.
          Facere voluptatum repellendus unde voluptatibus ipsa illo quia,
          quaerat odio excepturi porro cupiditate placeat velit laborum totam
          qui earum voluptas maxime sequi commodi exercitationem. Adipisci
          aperiam sit reprehenderit ullam, aliquam eos facere tempora
          repellendus perferendis asperiores cumque expedita sunt architecto,
          hic voluptatem amet vitae sequi possimus modi distinctio. Itaque
          dignissimos id vero incidunt reprehenderit. Dolore obcaecati,
          necessitatibus molestiae ab quos laboriosam itaque exercitationem
          saepe mollitia numquam molestias facilis doloribus doloremque porro
          tempore aliquam animi nulla voluptate rem. Officiis culpa, corporis
          cumque porro perspiciatis, amet ad minima dolor odio soluta
          exercitationem. Quo cumque praesentium nemo culpa unde commodi
          accusamus sed hic nam placeat quos vel ullam debitis dolor, molestiae
          ipsa. Porro, voluptas quod. Modi totam animi officia ducimus molestias
          ea fugiat nam in. Fuga exercitationem nulla maxime debitis id, quidem
          ea quia quo vitae voluptatibus autem modi facere necessitatibus
          eligendi nihil odit at delectus fugiat sunt temporibus dignissimos
          quam laborum velit nostrum. Ut necessitatibus, ipsum rerum, similique
          sint nisi soluta qui voluptates asperiores dolorem, nesciunt nulla
          officia velit explicabo modi. Labore autem ipsam consectetur rem,
          reprehenderit quae placeat laborum libero magnam cumque facilis nemo
          porro ducimus ex quos aut sunt nam. Totam voluptates incidunt
          explicabo tempore accusantium enim perferendis repellendus odit quasi,
          vel quod alias ad excepturi harum. Minima at officia incidunt eos?
          Odit, nobis dolorem quo, molestiae eos enim quasi quidem sunt est quia
          nisi! Recusandae sint beatae architecto nisi ullam, suscipit, pariatur
          quo hic ipsam explicabo labore veritatis doloribus laborum delectus.
          Aliquam, harum! Unde optio molestiae velit labore animi dolores quos
          vel voluptates voluptas ea vitae libero aperiam distinctio accusantium
          pariatur dolorem at, voluptatem, nemo obcaecati, porro saepe similique
          quod hic? Alias ducimus magnam incidunt distinctio eius illo dolore
          officiis reiciendis ab minima dolor vero, consequatur nobis eum
          suscipit recusandae laudantium. Aperiam pariatur culpa porro provident
          eveniet! Soluta cum, repellat adipisci iure animi laborum minima ab
          rem quis illum. Vel repellendus, neque dolorem officia totam
          voluptatibus asperiores. Voluptatum, perferendis, laboriosam
          laudantium iste numquam natus cumque veritatis omnis vitae ipsam
          inventore ipsa amet ad. Error, cupiditate? Harum incidunt voluptate
          porro inventore excepturi saepe laborum, dignissimos a culpa
          architecto quisquam minus, suscipit facilis. Commodi, quae odio aut ea
          minima excepturi temporibus nesciunt non, libero adipisci corporis
          ratione cum praesentium incidunt dolor. Omnis ducimus iure, dolore
          sint rerum magnam. Provident, voluptates voluptatum. Dolor nihil, eos
          fugiat, vitae reprehenderit iste perferendis obcaecati repellendus id
          quasi maxime pariatur. Nobis maxime quas enim, fugit neque, quam
          corrupti modi repellendus vitae, praesentium optio quia? Iste rem sit
          perferendis corrupti aut in nihil, repudiandae quasi quia officiis
          sint laboriosam beatae optio voluptatem quas quam alias animi iusto
          odit magnam consectetur eaque porro quae illum. Eaque ut laboriosam
          voluptas consectetur enim illo officiis inventore sint quisquam
          explicabo sit magni provident cumque nisi reiciendis assumenda
          cupiditate ullam, quos, blanditiis quis rerum. Ex quibusdam sunt odit
          cupiditate quo ducimus, dolore eveniet deserunt sequi aliquam id
          architecto natus labore quos saepe quam delectus voluptas sint ad
          veniam ullam officiis numquam. Distinctio placeat aut sint rerum
          quidem, deleniti, minima ea sunt fugiat pariatur eum. Eveniet, tempora
          commodi explicabo ex consequatur voluptatum doloremque suscipit
          tempore rerum eius unde libero corporis dolorum iste eum. Nobis
          deserunt quibusdam distinctio facilis voluptatum esse eum, voluptas
          quasi odit, quis beatae mollitia deleniti libero! Possimus eius rem at
          vitae temporibus dolor ea debitis. Expedita aperiam accusantium esse
          natus fugiat tempora ea, distinctio eveniet laboriosam ratione,
          blanditiis beatae repellat temporibus facere pariatur quasi alias,
          tempore cupiditate architecto quaerat eius voluptates reprehenderit.
          Asperiores, fugiat? Explicabo alias ratione voluptatum excepturi,
          omnis nemo ullam odio dolore saepe aut blanditiis quod iure rem,
          tempora ipsa maiores officiis temporibus incidunt dolorem ipsam
          laudantium cum eius! Laudantium, quis expedita ab distinctio molestiae
          harum, vero perspiciatis hic aspernatur architecto eaque et. Libero at
          totam minima reprehenderit laboriosam dolores quisquam deleniti quod
          dolorum perferendis, cumque error! Reiciendis maxime voluptas ex eos
          doloribus quaerat perferendis odio quod numquam officia similique
          accusantium amet fugiat debitis nisi voluptatem non, nam nostrum eaque
          alias aspernatur nihil. Dicta laborum quos ullam sunt aspernatur
          corrupti quae, adipisci, aut expedita dolorum, facilis fuga molestias!
          Quae rem a quis praesentium provident atque id iusto nisi ea nam
          voluptatem ut perferendis veritatis cum velit nihil, nostrum deserunt
          nobis! Ratione aliquam, consequatur ipsam quas reiciendis optio
          excepturi cumque quibusdam repellendus est explicabo rerum dicta
          blanditiis similique! Vel ducimus fugit pariatur? Dolorem repellendus
          ab quae exercitationem voluptas numquam vel enim earum aliquam veniam
          delectus blanditiis tempora, sit dolores et atque, dignissimos
          inventore quis cupiditate amet. Illum vel illo autem quod est enim
          quae, suscipit, officia nulla eius sint, magnam iste debitis
          voluptatum consequatur quia quo dolores earum perferendis non. Sunt
          nam corrupti fuga repellendus reiciendis quisquam sapiente ut animi
          nulla exercitationem ea nobis placeat harum error hic ad voluptatibus
          odit deserunt sequi asperiores enim, unde nihil. Aliquid ipsum cumque
          iusto tempora facilis laudantium voluptatum aut consectetur nam
          adipisci, ea, et provident, placeat eligendi corporis? At iusto eum
          unde dolor tempore. Temporibus, ullam nesciunt sed iusto facilis
          deserunt ab. Doloremque earum eaque delectus sed soluta vero fugiat
          praesentium quisquam, doloremque facere commodi. Nihil molestiae
          impedit, doloribus voluptate facilis blanditiis nostrum ducimus
          dolore. Ut dignissimos sed quas tempora sint totam aperiam
          reprehenderit accusantium porro omnis aspernatur quam inventore
          exercitationem, nam optio mollitia velit ad quasi veniam deserunt
          cupiditate impedit minus. Tenetur beatae magni maiores quod ipsum
          aliquam velit consectetur? Corrupti nam fugit architecto minima nihil
          ea exercitationem, quidem, quas facere pariatur autem ut doloribus
          quae iste. Ullam dolore ipsam porro aliquam ipsum quas quod deleniti
          tenetur reprehenderit, iste suscipit vel ratione nesciunt similique
          earum. Quaerat, autem quos. Ratione officiis sapiente totam asperiores
          tenetur modi eaque obcaecati sint soluta ducimus ipsam nesciunt fugiat
          error, eos ut laudantium exercitationem facilis saepe. Consequuntur
          debitis assumenda laboriosam maiores nihil et aliquid fugit, minima
          possimus quae temporibus eaque commodi ex soluta, eos voluptate
          incidunt sit, repellat aut ad voluptatibus? Est nulla quisquam fuga
          vitae quae tempora corrupti sapiente placeat, odit voluptate ipsum ab
          inventore reprehenderit non magni ipsam aut quia reiciendis repellat
          culpa molestiae dolor error! Delectus nisi dicta iste iusto accusamus
          temporibus cumque nobis libero voluptatibus earum iure, qui labore
          fugit, est veniam, officia exercitationem! Dolor in et accusantium
          aut. Vel dignissimos quod porro, consequatur, nobis ratione cumque
          accusantium itaque blanditiis, dolorem aliquid possimus natus rem
          dicta officia repudiandae voluptatem? Iste iure quasi non, sint natus
          ab dolore, quos molestiae dolorem corporis laudantium itaque explicabo
          voluptatum ut quam voluptas amet sunt. Atque, repellat esse. Quod ex
          laborum autem veniam eos velit voluptatibus est consectetur laboriosam
          officiis, deleniti ullam, aliquid porro rerum placeat voluptatem ab
          debitis saepe adipisci, sapiente eum quas perspiciatis exercitationem!
          Illo, deleniti ducimus consectetur, nobis repellat eius beatae
          aspernatur nulla maiores nemo quasi asperiores iure accusantium modi.
          Eum officiis voluptatibus sunt repellendus eveniet, porro nostrum ut
          ea suscipit ipsa facere veniam alias! Ad exercitationem maxime aut
          suscipit totam qui delectus doloremque consequatur obcaecati rem quos
          distinctio quis, necessitatibus temporibus in eaque iusto, incidunt
          eius ipsam ipsa illum ut. Illo, sunt incidunt soluta possimus nihil ea
          harum nobis? Ipsam dicta, error ea consectetur mollitia maiores
          possimus facere aspernatur deleniti natus dolorum quaerat ex vitae
          laboriosam quo rerum. Rerum repellat mollitia commodi? Perspiciatis ea
          delectus dicta saepe quisquam aperiam error accusantium quis amet
          voluptas dolor nisi aspernatur velit eligendi consequatur asperiores
          ducimus assumenda repudiandae, debitis porro rerum culpa ex. Neque
          nostrum, perspiciatis ad doloremque non quisquam, asperiores ipsum
          consequuntur laborum libero assumenda, corporis minus. Cum ut
          exercitationem facilis quod quaerat, nihil magni eveniet numquam earum
          aperiam aliquam, velit voluptates reiciendis facere alias quam cumque
          mollitia deserunt repellendus ipsum eos? Ut, magnam totam? Officiis
          officia, sapiente aut quidem dolorem inventore velit et! Beatae
          repellendus dignissimos repudiandae commodi quidem quis ipsum porro
          autem accusantium nisi quas veritatis perspiciatis nam, error odio
          rerum laboriosam quo, maiores sequi voluptas dolore itaque incidunt
          tempora? Quas facilis dolorum eligendi officiis ipsam omnis molestias
          architecto excepturi placeat aliquid doloremque ipsum beatae
          distinctio numquam ducimus minus cum fugiat, molestiae nam incidunt
          quos repellat nobis. Et reprehenderit recusandae sapiente, quo hic
          voluptas provident accusamus animi maxime dolorem nesciunt inventore
          perspiciatis? Adipisci ad est modi nisi architecto. Consequatur
          perferendis accusamus asperiores expedita? Corrupti, cupiditate nemo?
          Id minima tempore maiores officia unde dicta sed, alias voluptate,
          temporibus facilis ipsam nam inventore, excepturi dolor rem ducimus
          natus totam suscipit modi earum nostrum aspernatur. Consequatur iste
          exercitationem ipsum. Provident tenetur esse magni explicabo, ab,
          obcaecati alias similique fugiat reprehenderit quibusdam atque numquam
          quaerat quae blanditiis ut ducimus quod error fuga quas earum tempora
          corporis sit mollitia? Provident fugiat quas incidunt facere, tenetur
          praesentium voluptatibus, placeat modi voluptate non officia voluptas
          facilis, architecto fuga adipisci quae earum natus nesciunt et impedit
          nostrum itaque quia. Vel laboriosam aliquid ratione. Impedit eos iste
          sapiente quisquam molestias veniam fuga molestiae odit voluptas. Quod
          exercitationem non ea molestias voluptate. Asperiores, vitae? Sint
          reiciendis optio neque quod ex numquam magni recusandae ullam fuga
          eveniet? Ullam illum blanditiis similique eius, voluptatem sunt
          architecto recusandae a impedit dolorem! Consectetur alias, facere
          quos voluptatum cum quae, hic dignissimos officia molestiae,
          cupiditate eum voluptate a veniam inventore eligendi omnis nam vero
          minus unde fugiat totam eveniet ex doloribus. Quia numquam repudiandae
          aliquid facere doloribus nostrum itaque! Repellat omnis, explicabo
          ducimus et labore cupiditate ipsa nemo exercitationem reiciendis
          dolorum repudiandae quis, beatae incidunt fugit. Ullam atque nemo
          ipsam vero perferendis. Quod, debitis odit. Corporis nihil natus
          veniam debitis. Labore velit excepturi veritatis dolores omnis
          provident quasi quaerat! Aliquid quaerat temporibus eum asperiores
          deleniti, iure alias veritatis blanditiis hic quae, quis libero
          maxime, cupiditate natus exercitationem minima dignissimos? Nesciunt
          possimus deleniti recusandae ratione mollitia, amet eos ullam nam iure
          illum? Saepe officia necessitatibus ipsum aperiam odio natus repellat
          culpa reprehenderit vel amet velit ipsam voluptas explicabo obcaecati
          recusandae ullam ducimus repudiandae rem, incidunt provident ea vero
          pariatur. Esse consequuntur error libero, veritatis voluptatum
          sapiente nisi beatae rerum inventore, fugiat illum laudantium magni
          saepe animi sint aliquam magnam architecto, possimus odit incidunt
          neque fuga. Rem quasi quam eum modi ipsum, architecto cumque placeat
          qui molestias quibusdam asperiores quae soluta omnis, molestiae esse a
          et! Saepe, ut accusamus alias, rerum doloribus quisquam quo unde ipsum
          facili
        </div>

        <div>
          <button className="bg-black text-white w-24 h-10 rounded-xl mt-4">
            like
          </button>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
