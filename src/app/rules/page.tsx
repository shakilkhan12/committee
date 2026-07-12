import React from 'react'
import Header from '@/components/Header'
const page = () => {
  return (
    <div>
          <Header />
          <div className="p-8">
            <h2 className="urdu text-right text-[25px]">کمیٹی کے قواعد و ضوابط</h2>
            <p className="urdu text-lg text-right">کمیٹی صرف اُن افراد کے لیے تعزیتی انتظامات کرے گی جو کمیٹی کے منظور شدہ قواعد کے مطابق اہل ہوں</p>
            <p className="urdu text-lg text-right">اگر کسی رکن کی شادی شدہ بیٹی یا بہن گاؤں سے باہر رہتی ہو اور وفات کے بعد میت گاؤں لائی جائے تو کمیٹی کھانے پینے اور دیگر انتظامات کرے گی۔</p>
            <p className="urdu text-right text-lg">اگر کسی رکن کی شادی شدہ بیٹی یا بہن گاؤں کے اندر رہتی ہو لیکن وہ خود کمیٹی کی رکن نہ ہو تو اس صورت میں کمیٹی کی طرف سے کھانے پینے یا دیگر انتظامات نہیں کیے جائیں گے۔</p>
            <p className="urdu text-right text-lg">جو افراد کمیٹی کے رکن نہیں ہیں ان کے لیے کمیٹی کسی قسم کے اخراجات یا انتظامات کی ذمہ دار نہیں ہوگی۔</p>
          </div>
    </div>
  )
}

export default page