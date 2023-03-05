/**
 * 인증
 */
export class Auth {
  /**
   * 유저 아이디
   */
  userId: string;
  /**
   * 토큰
   */
  token: string;

  /**
   * 생성자
   *
   * @param userId 유저 아이디
   * @param token 토큰
   */
  constructor(userId: string, token: string) {
    this.userId = userId;
    this.token = token;
  }

  /**
   * Auth를 생성한다.
   *
   * @param userId 유저 아이디
   * @param token 토큰
   * @returns Auth
   */
  static of(userId: string, token: string) {
    return new Auth(userId, token);
  }
}
