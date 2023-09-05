import styles from './FeedbackForm.module.css'

export default function FeedbackForm() {
  return (
      <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="feedback"
        method="POST"
        action="/success"
      >
        <input type="hidden" name="form-name" value="feedback" />
        <p className={styles.hidden}>
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>

          <p>
        <label htmlFor="name">나는 하루에 <input id="name" className={styles['form-field']} type="text" name="name" /> 분씩 걸을 것이다.</label>
          </p>

          <p>
        <label htmlFor="name">나는 내가 좋아하는 활동 중, <input id="name" className={styles['form-field']} type="text" name="name" /> 을(를) 
            </p>
         <p>
더욱 자주, 더욱 활발하게 할 것이다.</label>
          </p>
         
          <p> 
               <label htmlFor="name"> </label>
          </p>
          
          <p>
        <label htmlFor="name">나는 신체활동을 습관화하기 위해 최선을 다할 것이다.</label>
          </p>

          <p>
        <label htmlFor="name">나는 이를 <input id="name" className={styles['form-field']} type="text" name="name" /> 부터 반드시 실천할 것이다.</label>
          </p>

          <p>
        <label htmlFor="name">내 이름은 <input id="name" className={styles['form-field']} type="text" name="name" /> 이다.</label>
          </p>

          
        <button className={styles.button} type="submit">서약서 작성하기</button>
      </form>
  )
}
