-- 1. shelters 테이블 생성 (보호소 정보)
CREATE TABLE shelters (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  country TEXT NOT NULL,
  city TEXT,
  contact_url TEXT,
  partner_since TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. animals 테이블 생성 (유기동물 정보)
CREATE TABLE animals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  breed TEXT,
  age TEXT,
  gender TEXT CHECK (gender IN ('남', '여', '알수없음')),
  status TEXT DEFAULT 'SAFE' CHECK (status IN ('CRITICAL', 'WATCH', 'SAFE')),
  intake_date DATE NOT NULL,
  photo_url TEXT,
  story_text TEXT,
  shelter_id UUID REFERENCES shelters(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. donors 테이블 생성 (후원자 정보)
CREATE TABLE donors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. campaigns 테이블 생성 (긴급 캠페인)
CREATE TABLE campaigns (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  target_amount BIGINT NOT NULL,
  current_amount BIGINT DEFAULT 0,
  deadline DATE,
  photo_url TEXT,
  description TEXT,
  status TEXT DEFAULT 'ACTIVE',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. donations 테이블 생성 (후원 내역)
CREATE TABLE donations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  donor_id UUID REFERENCES donors(id),
  purpose_code TEXT, -- A-1, A-2 등 기획안 코드
  amount BIGINT NOT NULL,
  type TEXT CHECK (type IN ('regular', 'one-time')),
  campaign_id UUID REFERENCES campaigns(id),
  status TEXT DEFAULT 'PENDING',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 샘플 데이터 삽입 (선택 사항)
INSERT INTO shelters (name, country) VALUES ('서울 유기동물 보호소', 'South Korea');
