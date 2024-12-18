import { useState } from 'react';

import { sendEmailCode, checkEmailCode } from '@apis';

import { useSignupContext } from '@contexts';

import { Button, WhiteButton, InputAction } from '@components';
import {
  ArrowIndex,
  Form,
  Group,
  Message,
  InputActionWithLabel,
} from '@pages/SignUp/components';

import styles from './EmailVerification.module.css';

export default function EmailVerification({ onNext }) {
  const { formData, updateFormData } = useSignupContext();
  const { isInvalidEmail } = formData;
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [emailData, setEmailData] = useState({});
  const [codeData, setCodeData] = useState({});
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isCodeLoading, setIsCodeLoading] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.index}>
        <ArrowIndex label='학교 인증하기' isSelected />
        <ArrowIndex label='기본정보 기입' />
        <ArrowIndex label='회원가입 완료' />
      </div>

      <Form className={styles.form}>
        <Group>
          <div>
            <InputActionWithLabel
              name='email'
              label='학교 이메일'
              value={email}
              updateValue={(event) => setEmail(event.target.value)}
              placeholder='이메일을 입력해 주세요'
              onClick={async () => {
                try {
                  setIsEmailLoading(true);
                  const data = await sendEmailCode({ email });
                  setEmailData(data);
                  updateFormData({
                    target: { name: 'email', value: email },
                  });
                  updateFormData({
                    target: { name: 'isInvalidEmail', value: true },
                  });
                } catch (error) {
                } finally {
                  setIsEmailLoading(false);
                }
              }}
              buttonText='입력완료'
              disabled={isEmailLoading}
            />
            <Message
              text={emailData?.message}
              condition={emailData?.isSuccess}
            />
          </div>
          <div>
            <InputActionWithLabel
              label='인증코드'
              value={code}
              updateValue={(event) => setCode(event.target.value)}
              placeholder='전송된 인증 코드를 입력해 주세요'
              onClick={async () => {
                try {
                  setIsCodeLoading(true);
                  const data = await checkEmailCode({ email, code });

                  setCodeData(data);
                  updateFormData({
                    target: { name: 'guestToken', value: data?.guestToken },
                  });
                  updateFormData({
                    target: { name: 'isInvalidEmail', value: !data.isSuccess },
                  });
                } catch (error) {
                } finally {
                  setIsCodeLoading(false);
                }
              }}
              buttonText='확인'
              disabled={isCodeLoading}
            />
            <Message text={codeData?.message} condition={codeData?.isSuccess} />
          </div>
        </Group>
      </Form>

      <div className={styles.buttons}>
        <Button
          className={styles.button}
          onClick={onNext}
          disabled={isInvalidEmail}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
